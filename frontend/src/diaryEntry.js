import "./diaryEntry.css"

function DiaryEntry() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //Submit code
  };

  return (
<div class="container">
  <form onSubmit={handleSubmit}>
  <div class="row">
    <div class="col-25">
      <label for="sname">Spot Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="sname" name="sname" placeholder="Spot..."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="coords">Coordinates</label>
    </div>
    <div class="col-75">
      <input type="text" id="coords" name="coordinates" placeholder="Coordinates..."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="notes">Notes</label>
    </div>
    <div class="col-75">
      <textarea type="text" id="notes" name="notes" placeholder="Notes..."/>
    </div>
  </div>
  <br/>
  <div class="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>
  );
}

export default DiaryEntry;