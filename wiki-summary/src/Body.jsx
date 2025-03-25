import Searchbar from "./components/Searchbar";
import "./App.css";

function Body() {
  return (
    <>
      <div class="center">
        {/*Alert message badge starts*/}
        <div>
          <div id="showalert" class="alert hideit">
            {/* <span class="closebtn" onclick={closeTheAlert}>x</span> */}
            <strong class="alertmessage">
              Input null. Enter URL or topic.
            </strong>
          </div>
        </div>
        {/*Alert message badge ends*/}

        <Searchbar />

        addNums()

        <div id="steps" class="container">
          {/*Steps / Instructions */}
          <p class="moto">Quick summary of desired wiki article</p>
          <ol>
            <li>
              Copy n paste the URL of your desired Wiki page (or) Input any
              topic you want to know about in the box above
            </li>
            <li>Click the submit button</li>
            <li>Get the summary of the Wiki page!</li>
          </ol>
        </div>
      </div>

      <div class="content" style={{ display: "block" }}>
        content
      </div>
      <div class="footer"></div>
    </>
  );
}

export default Body;
