import React from "react";
import styles from "./Profile.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Profile = () => {

    return (
        <section className={styles.container} id ="profile">
            <h2 className={styles.title} >Profile</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}> 
                                <img 
                                src={skill.imageSrc} 
                                alt={skill.game}/> 
                            </div>
                            <p>{skill.game}</p>
                        </div>
                    })
                    }</div>

                <ul className={styles.history}>{
                        history.map((item, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                    })
                }</ul>
            </div>
        </section>
    );
}