import './App.css';
import GetSchoolData from "./client/Apis/Skolor/GetSchoolData"
import Layout from "./client/Components/Layout"
import Style from "./client/Components/Layout.module.css"

function App() {
  return (
    <Layout>
      <div  className={Style.main}>
        <GetSchoolData/>
      </div>
    </Layout>
  )
}

export default App;
