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
  try {
    const response = await axios.post(
      BREVO_API_URL,
      {
        sender: emailData.sender || {
          name: 'Mr. Vardy Portfolio',
          email: import.meta.env.VITE_SENDER_EMAIL || 'noreply@vardyportfolio.com'
        },
        to: [{ email: emailData.to }],
        subject: emailData.subject,
        htmlContent: emailData.htmlContent
      },
      {
        headers: {
          'api-key': import.meta.env.VITE_BREVO_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.status === 201;
  } catch (error) {
    console.error('Email sending failed:', error);
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
}): Promise<boolean> => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; margin-bottom: 20px;">Thank You for Your Inquiry!</h2>
      
      <p>Dear ${inquiryData.name},</p>
      
      <p style="color: #475569; line-height: 1.6;">
        Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.
      </p>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #64748b;">
          I typically respond within 24-48 hours. If your matter is urgent, please mention it in your message.
        </p>
      </div>
      
      <div style="margin-top: 30px;">
        <p style="color: #475569;">Best regards,</p>
        <p style="color: #1e293b; font-weight: bold;">Mr. Vardy</p>
        <p style="color: #64748b; font-size: 14px;">
          IT Student & Creative Designer<br>
          Kumasi, Ghana
        </p>
      </div>
    </div>
  `;

  return await sendEmail({
    to: inquiryData.email,
    subject: 'Thank You for Your Inquiry - Mr. Vardy Portfolio',
    htmlContent
  });
};
