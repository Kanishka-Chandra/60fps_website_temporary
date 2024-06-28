import styles from "./bubble.module.css";

const BubbleText = ({ text }) => {
  return (
    <h2 className="cursor-pointer text-center text-2xl font-normal text-indigo-600 md:text-4xl">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
