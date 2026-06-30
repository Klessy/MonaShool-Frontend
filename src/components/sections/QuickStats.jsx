// "use client"
import { stats } from "@/data/data";

import "../styles/stats.css";

const QuickStats = () => {
  return (
    <section className="stats__section">
        <div className="stats__container">
            {
                stats.map((stat) => {
                    const {id, icon, number, title, description}= stat
                    return (
                        <div className="statCard" key={id}>
                            <div className="statIcon">{icon}</div>
                            <h3>{number}</h3>
                            <h4>{title}</h4>
                            <p>
                                {description}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default QuickStats