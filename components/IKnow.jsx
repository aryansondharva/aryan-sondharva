import { baseskills, coreskills, databaseskills, toolskills } from "@/constants";
import { motion } from "framer-motion";

const IKnow = () => {
  return (
    <div className="whatiknow_wrapper" id="iknow">
      <div className="whatiknow_heading" id="whatIknowMobile">
        <h1 className="header-h">What I Know?</h1>
        <p className="text-lg mx-2 md:text-4xl">
          Here&apos;s the list of langs I know and I&apos;m good at!
        </p>
      </div>
      <div className="whatiknow_content_wrapper max-w-7xl w-full px-[4%]">
        <div className="whatiknow_content">
          <div className="whatiknow_box_wrapper">
            <h1>BASE</h1>
            <div className="whatiknow_box_skills">
              {baseskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whatiknow_box_wrapper">
            <h1>CORE</h1>
            <div className="whatiknow_box_skills">
              {coreskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whatiknow_box_wrapper">
            <h1>DATABASES</h1>
            <div className="whatiknow_box_skills">
              {databaseskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whatiknow_box_wrapper">
            <h1>TOOLS</h1>
            <div className="whatiknow_box_skills">
              {toolskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IKnow;
