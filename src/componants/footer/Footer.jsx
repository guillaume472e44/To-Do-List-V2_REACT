import "./Footer.css";

export default function Footer({ completedTask }) {
  if (completedTask) {
    return (
      <footer>
        <code>
          Tu as éliminé {completedTask} tâche{completedTask > 1 ? "s" : ""}{" "}
        </code>
      </footer>
    );
  }

  return <></>;
}
