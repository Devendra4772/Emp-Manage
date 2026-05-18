import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchFilter from "../components/SearchFilter";
import AIRecommendation from "../components/AIRecommendation";

function Home() {

  return (
    <div className="container">

      <h1>
        AI Employee Management System
      </h1>

      <EmployeeForm />

      <SearchFilter />

      <EmployeeList />

      <AIRecommendation />

    </div>
  );
}

export default Home;