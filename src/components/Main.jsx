import { useState } from "react"

const Main = () => {

  const [articlesList, setArticlesList] = useState([])
  const [newTitle, setNewTitle] = useState('')

  const addArticle = () => {
    event.preventDefault()
    if (!newTitle) {
      alert('Devi inserire un titolo')
    } else {
      setArticlesList([...articlesList, newTitle]);
      setNewTitle('')
    }
  }

  const deleteArticle = (i, title) => {
    console.log(i);
    const newArticlesList = articlesList.filter((item, index) => i !== index)
    setArticlesList(newArticlesList)
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
                type="title"
                className="form-control"
                placeholder="Inserisci il titolo dell'articolo"
                id="title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="form-label">URL immagine:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci l'URL dell' immagine"
                id="image"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="form-label">Contenuto:</label>
              <textarea
                id="content"
                className="form-control"
                rows="5"
                placeholder="Inserisci il contenuto"
              ></textarea>
            </div>
            <div className="mb-4">
              <select
                className="form-select"
              >
                <option selected>Seleziona la categoria</option>
                <option value="1">Sport</option>
                <option value="2">Arte</option>
                <option value="3">Animali</option>
                <option value="4">Hobbies</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label">Tags:</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Cani
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Football
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Tennis
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Gatti
                </label>
              </div>
            </div>


            <div className="mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="publish" />
              <label className="form-check-label" htmlFor="exampleCheck1">Pubblica</label>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
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
              <th scope="row"><img src="https://placedog.net/100/100?random" alt="dog" /></th>
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
