// Brevo Email Service Configuration
import axios from 'axios';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

interface EmailData {
  to: string;
  subject: string;
  htmlContent: string;
  sender?: {
    name: string;
    email: string;
  };
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  const apiKey = import.meta.env.VITE_BREVO_API_KEY;
  const senderEmail = import.meta.env.VITE_SENDER_EMAIL;

  if (!apiKey) {
    console.error('CRITICAL: Brevo API key (VITE_BREVO_API_KEY) is missing in .env!');
    return false;
  }

  try {
    const response = await axios.post(
      BREVO_API_URL,
      {
        sender: emailData.sender || {
          name: 'Mr. Vardy Portfolio',
          email: senderEmail || 'noreply@https://varportfolio.vercel.app'
        },
        to: [{ email: emailData.to }],
        subject: emailData.subject,
        htmlContent: emailData.htmlContent
      },
      {
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json'
        }
      }
    );

    // Brevo typically returns 201, but 202 is also successful for accepted emails
    return response.status === 201 || response.status === 202;
  } catch (error: any) {
    console.error('Email sending failed:', error.response?.data || error.message);
    return false;
  }
};

export const sendInquiryNotification = async (inquiryData: {
  name: string;
  email: string;
  message: string;
  subject?: string;
}): Promise<boolean> => {
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@vardyportfolio.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; margin-bottom: 20px;">New Inquiry Received</h2>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #1e293b;">Contact Details:</h3>
        <p><strong>Name:</strong> ${inquiryData.name}</p>
        <p><strong>Email:</strong> ${inquiryData.email}</p>
        <p><strong>Subject:</strong> ${inquiryData.subject || 'No subject provided'}</p>
      </div>
      
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
        <h3 style="margin-top: 0; color: #1e293b;">Message:</h3>
        <p style="white-space: pre-wrap; color: #475569;">${inquiryData.message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 14px;">
          This inquiry was sent from your portfolio website.<br>
          Timestamp: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `;

  return await sendEmail({
    to: adminEmail,
    subject: `New Portfolio Inquiry: ${inquiryData.subject || 'Message from ' + inquiryData.name}`,
    htmlContent
  });
};

export const sendAutoReply = async (inquiryData: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  description?: string;
}): Promise<boolean> => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <h2 style="color: #2563eb; margin-bottom: 20px;">Inquiry Confirmation</h2>
      
      <p>Dear ${inquiryData.name},</p>
      
      <p style="color: #475569; line-height: 1.6;">
        Thank you for reaching out! This is a confirmation that your inquiry has been successfully sent through my portfolio. 
        I've received your details and will get back to you as soon as possible.
      </p>

      <div style="background: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0; margin: 25px 0;">
        <h3 style="margin-top: 0; color: #1e293b; border-bottom: 2px solid #2563eb; padding-bottom: 10px; display: inline-block;">Your Inquiry Details:</h3>
        <p style="margin: 15px 0 5px 0;"><strong>Name:</strong> ${inquiryData.name}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${inquiryData.email}</p>
        ${inquiryData.phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${inquiryData.phone}</p>` : ''}
        ${inquiryData.service ? `<p style="margin: 5px 0;"><strong>Interested In:</strong> ${inquiryData.service}</p>` : ''}
        ${inquiryData.description ? `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-weight: bold;">Description:</p>
            <p style="margin: 5px 0; color: #475569; white-space: pre-wrap;">${inquiryData.description}</p>
          </div>
        ` : ''}
      </div>
      
      <p style="color: #64748b; font-size: 14px;">
        I typically respond within 24-48 hours. If your matter is urgent, please mention it in your message.
      </p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <p style="color: #475569; margin: 0;">Best regards,</p>
        <p style="color: #1e293b; font-weight: bold; margin: 5px 0;">Mr. Vardy</p>
        <p style="color: #64748b; font-size: 14px; margin: 0;">
          IT Student & Creative Designer<br>
          Kumasi, Ghana
        </p>
      </div>
    </div>
  `;

  return await sendEmail({
    to: inquiryData.email,
    subject: `Submission Confirmed: Inquiry from ${inquiryData.name}`,
    htmlContent
  });
};
