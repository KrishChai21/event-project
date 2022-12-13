import Link from "next/link";
import classes from "./Button.module.css";

// children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component.
function Button({ link, children, onClick }) {
  // This one is for navigating to a different page
  if (link) {
    return (
      <Link href={link}>
        {/* Prior to NextJS.13, to style a Link component, it is necessary to add an anchor tag within it and apply the classes to it and do not add the href attribute! */}
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
