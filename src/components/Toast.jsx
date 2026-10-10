import React from 'react';
import { Check } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-notification">
      <div className="toast-icon">
        <Check style={{ width: 14, height: 14 }} />
      </div>
      <span className="toast-message">{message}</span>
    </div>
  );
}
