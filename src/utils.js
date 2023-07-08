import { toast } from "react-hot-toast";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard')
      toast.success('Copied to clipboard.');
    })
    .catch((error) => {
      console.log('Failed to copy text to clipboard:', error);
      toast.error('Failed to copy text');
    });
};