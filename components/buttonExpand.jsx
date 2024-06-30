import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Chatbox.module.css';

const ToggleLink = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isChatPage = router.pathname === '/chat';

  const href = isHomePage ? '/chat' : '/';

  return (
    <Link href={href}>
      <a className={styles.chatboxLink}>
        <img src='/images/icon-expand.png' alt='Expand icon' className={styles.chatboxExpand}/>
      </a>
    </Link>
  );
}

export default ToggleLink;
