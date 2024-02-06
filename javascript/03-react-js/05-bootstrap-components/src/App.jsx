import Alert from "./components/Alert";
import Card from "./components/Card";
import Button from "./components/button";

function App() {
  return (
    <>
      {/* Button */}
      <div className="m-5">
        <h1 className="text-center text-4xl font-semibold">Button Component</h1>
        <div className="space-x-3 text-center">
          <Button className="btn btn-success"></Button>
          <Button className="btn btn-warning"></Button>
          <Button className="btn btn-danger"></Button>
          <Button className="btn btn-secondary"></Button>
          <Button className="btn btn-info"></Button>
        </div>
      </div>
      {/* card */}
      <div className="m-10">
        <h1 className="text-center text-4xl font-semibold">Card Component</h1>
        <div className="grid md:grid-cols-4 m-5 space-y-5 md:space-y-0">
          <Card></Card>
          <Card></Card>
        </div>
      </div>

      {/* alert */}
      <div className="mt-10 mb-10">
        <h1 className="text-center text-4xl font-semibold">Alerts</h1>
        <Alert className="alert-danger" />
        <Alert className="alert-dark" />
        <Alert className="alert-warning" />
        <Alert className="alert-primary"></Alert>
      </div>
    </>
  );
}

export default App;
