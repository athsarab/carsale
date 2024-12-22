import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image'; 

function Footer() {
  return (
    <div className={styles.container}>
      <div>All Reseved from Athsara</div>
      <div className={styles.socials}>
        <Image src="/1.png" alt="facebook" width={30} height={30} className={styles.icon}/>
        <Image src="/2.png" alt="" width={30} height={30} className={styles.icon}/>

        <Image src="/3.png" alt="" width={30} height={30} className={styles.icon}/>
        <Image src="/4.png" alt="" width={30} height={30} className={styles.icon}/>


      </div>

</div>
  );
}

export default Footer;
