export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { token } = req.body;
    const secretKey = '6Ld-zaMqAAAAAGu_oVb0S8fB5naUyFWNK7mb3MkE'; // Replace with your secret key from Google reCAPTCHA
  
    try {
      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`,
      });
      const data = await response.json();
  
      if (data.success) {
        return res.status(200).json({ success: true, message: 'reCAPTCHA verified' });
      } else {
        return res.status(400).json({ success: false, message: 'Failed reCAPTCHA verification' });
      }
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
  