// import styles from '../styles/Heading.module.css';


// // Named Export
// export const name = "Syed Samad Ali";

// export function SayName() { return `Helllo Sir `; }

// // Default Export
// export default function MyComponent() { return <h1 className={styles.heading} >Hello</h1>; }



import styles from '../styles/Heading.module.css';

// Named Export
export const name = "Syed Samad Ali";

export function SayName() { 
  return "Hello Sir"; 
}

// Default Export
export default function MyComponent() { 
  return <h1 className={styles.heading}>Hello</h1>; 
}
