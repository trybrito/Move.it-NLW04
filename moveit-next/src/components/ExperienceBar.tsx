import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    ); // como o estilo da div inline (barra de progresso de nível) será variável, nós a definimos como sendo uma porcentagem e não por meio de um valor fixo no CSS.
}
