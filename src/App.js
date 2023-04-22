function MyButton() {

    return(

        <button> i'ma fcking button </button>

        )
}

const page = [
  { title: 'Oui', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = page.map(pages =>
      <li
          key={pages.id}
          style={{
            color: pages.isFruit ? 'magenta' : 'darkgreen'
          }}
      >
        {pages.title}
      </li>
  );

  return (
      <ul>{listItems}</ul>
  );
}

function About(){
    return(
        <div>
            <>
                <h1>About</h1>
                <p>Hello there.<br />How do you do?</p>
            </>
        </div>
    )
}


export default function App() {
  return (
      <div>
            <About />
            <ShoppingList />
      </div>

  );
}

