import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Encontre a solução para seu negócio<br className='sm:black hidden' /> de forma
      simplificada.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Trabalhamos de forma transparente, filtrando suas necessidades 
      e traçando sempre as etapas que estão sendo desenvolvidas para atender a sua empresa!</p>
         <Button styles="mt-10" />
    </div>
  <div className={layout.sectionImg}>
    <img src={card} alt="card" className='w-[100%] h-[100%]'/>
  </div>
  </section>
)

export default CardDeal