import { useState } from "react"

const categories = [
  "Cuccioli",
  "Cani anziani",
  "Attività all'aperto",
  "Stili di vita dei cani",
  "Cani da lavoro"
];

const tags = [
  { id: 1, tag: "Adozione" },
  { id: 2, tag: "Addestramento" },
  { id: 3, tag: "Cucciolo" },
  { id: 4, tag: "Razze" },
  { id: 5, tag: "Salute" }
];

const Main = () => {

  const initialFormData = {
    title: "",
    urlImg: "",
    content: "",
    category: "",
    tags: [],
    published: false
  }

  const [formData, setFormData] = useState(initialFormData)

  const handlerField = (e) => {
    let value = e.target.value

    if (e.target.name === 'category') {
      value = categories[e.target.value]
    }

    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  }

  const handlerChangeTags = (e) => {
    let { tags, ...others } = formData
    if (tags.includes(e.target.value)) {
      tags = tags.filter(tag => tag !== e.target.value)
    } else {
      tags = [...tags, e.target.value]
    }

    setFormData({
      tags,
      ...others
    })
  }

  return (
    <main>
      <div className="container my-5">
        <div className="card mx-auto p-4">
          <form>
            <h4 className="my-3">Compila il form per aggiungere un articolo:</h4>
            <div className="mb-4">
              <label htmlFor="title" className="form-label">Titolo:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci il titolo dell'articolo"
                id="title"
                name="title"
                value={formData.title}
                onChange={handlerField}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="form-label">URL immagine:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci l'URL dell' immagine"
                id="image"
                name="urlImg"
                value={formData.urlImg}
                onChange={handlerField}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="form-label">Contenuto:</label>
              <textarea
                id="content"
                className="form-control"
                rows="5"
                placeholder="Inserisci il contenuto"
                name="content"
                value={formData.content}
                onChange={handlerField}
              ></textarea>
            </div>
            <div className="mb-4">
              <select
                className="form-select"
                onChange={handlerField}
                name="category"
                defaultValue=""
              >
                <option selected>Seleziona la categoria</option>
                {categories.map((category, index) => (
                  <option key={index} value={index}>{category}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label">Tags:</label>
              {tags.map(item => (
                <div key={item.id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.tag}
                    id={item.id}
                    onChange={handlerChangeTags}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={item.id}>
                    {item.tag}
                  </label>
                </div>

              ))}

            </div>


            <div className="mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="published"
                name='published'
                checked={formData.published}
                onChange={handlerField}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">Pubblica</label>
            </div>
            <button type="submit" className="btn btn-success">Aggiungi articolo</button>
          </form>
        </div>
        {/* <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Immagine</th>
              <th scope="col">Titolo</th>
              <th scope="col">Contenuto</th>
              <th scope="col">Tags</th>
              <th scope="col">Pubblicato</th>
              <th scope="col">Azioni</th>
            </tr>
          </thead>
          <tbody>
            <tr className="ro">
              <th scope="row"><img src="https://placedog.net/100/100?random" />alt="dog" /></th>
              <td>cane</td>
              <td>Otto</td>
              <td>ciao</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table> */}
      </div>

    </main >
  )
}

export default Main
