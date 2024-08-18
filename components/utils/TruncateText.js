import { useState, useEffect } from 'react';
import { truncateText } from '../../utils/truncate';
import styles from './TruncateText.module.scss';

const TruncateText = ({ text = '', maxLength, lines = 3 }) => {
    const [truncatedText, setTruncatedText] = useState('');
  
    useEffect(() => {
      setTruncatedText(truncateText(text, maxLength));
    }, [text, maxLength]);
  

  return (
    <div
      className={styles.truncate}
      style={{ '--line-clamp': lines }}
    >
      {truncatedText}
    </div>
  );
};

export default TruncateText;

