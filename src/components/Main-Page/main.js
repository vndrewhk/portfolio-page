import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <h1>About Me</h1>

        <p1 className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vitae lobortis nisi, in porta orci. Nullam finibus pretium imperdiet.
          Morbi lobortis massa in enim blandit consequat. Proin maximus, enim
          non lacinia consectetur, massa orci sodales nisl, commodo malesuada
          metus ante eu ex. Maecenas id purus nec dolor fringilla tempor. Morbi
          nec neque tortor. Nullam interdum finibus aliquam. Curabitur ultricies
          fermentum orci ut vulputate. Mauris rutrum eleifend est a tincidunt.
          Vivamus eget nisi vitae felis sodales tristique eu sed sapien.
          Phasellus nec mattis metus. Mauris vel metus eu sapien elementum
          tristique. Phasellus vulputate, ante ac porttitor pellentesque, purus
          ante semper dolor, nec finibus elit est non orci.
        </p1>
      </div>


    </div>
  );
};

export default Main;
