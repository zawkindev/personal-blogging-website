import Card from "./components/Card";

function App() {
  const cards = [
    {
      id: "123132",
      title: "Arch Linux Experience",
      tags: ["linux", "arch"],
      date: "2006-04-22",
    },
    {
      id: "456789",
      title: "Neovim Customization",
      tags: ["neovim", "vim", "customization"],
      date: "2019-11-15",
    },
    {
      id: "987654",
      title: "Building a REST API with Go",
      tags: ["golang", "rest", "api"],
      date: "2023-07-08",
    },
    {
      id: "654321",
      title: "Mastering tmux",
      tags: ["tmux", "terminal"],
      date: "2022-01-30",
    },
    {
      id: "321987",
      title: "Introduction to PostgreSQL",
      tags: ["postgresql", "database"],
      date: "2021-05-10",
    },
    {
      id: "789123",
      title: "JavaScript ES6 Features",
      tags: ["javascript", "es6"],
      date: "2017-09-25",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold" id="logo">
        Shahruz's Blog
      </h1>
      {cards.length > 0 &&
        cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              tags={card.tags}
              date={card.date}
            />
          );
        })}
    </div>
  );
}

export default App;
