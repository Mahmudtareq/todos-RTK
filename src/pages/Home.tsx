import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";
const Home = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold my-10 text-center">My Todo</h1>
      <TodoContainer />
    </Container>
  );
};

export default Home;
