import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

// import Header from "../../components/Header/Header";
import PokeCard from "../../components/Pokemon/PokeCard";
// import Search from "../../components/Others/Search";
import LoadingCard from "../../components/Loading/LoadingCard";
import Footer from "../../components/Others/Footer";
import api from "../../services/api";
import Colors from "../../styles/Colors";
import { SavePokemons, VerifyPokemons } from "../../functions/storage";
import Filtering from "../../components/Filter";

var pokemonsOriginal = [];
const perPage = 10;
const limit = 300; //default = 898
var max = 0; // nilai maksimum 

function Home({ history, ...props }) {
  
  const { query } = props.match.params;

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  function HandlerResult(maximum, pokemons) {
    max = maximum;
    setPokemons(pokemons);
    // untuk mengetahui value pokemon berapa yang di tampilkan
    console.log(pokemonsOriginal.length);
    console.log(pokemonsOriginal);
  }

  useEffect(() => {
    setLoading(true);
    if (query === undefined) {
      HandlerResult(
        pokemonsOriginal.length,
        pokemonsOriginal.slice(0, perPage)
      );
      setLoading(false);
      return false;
    }

    history.push(`/${query}`);
    var filterPokemons = pokemonsOriginal.filter((item) => {
      return (
        item.name.includes(query.toLowerCase()) || item.number.includes(query)
      );
    });

    HandlerResult(filterPokemons.length, filterPokemons.slice(0, perPage));
    setLoading(false);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    var listLocal = VerifyPokemons();
    if (listLocal === null) {
      LoadPokemons();
      return false;
    }

    pokemonsOriginal = listLocal;
    if (query !== undefined) {
      var filterPokemons = listLocal.filter(
        (i) => i.name.includes(query.toLowerCase()) || i.number.includes(query)
      );

      HandlerResult(filterPokemons.length, filterPokemons.slice(0, perPage));
    } else {
      HandlerResult(listLocal.length, listLocal.slice(0, perPage));
    }
    setLoading(false);
  }, []);

  async function LoadPokemons() {
    let pokeList = await api.get(`/pokemon?limit=${limit}`);
    var all = [];
    for (var i = 0; i < pokeList.data.results.length; i++) {
      let pokeDetails = await api.get(
        `/pokemon/${pokeList.data.results[i].name}`
      );

      var obj = {
        name: pokeDetails.data.name,
        id: pokeDetails.data.id,
        types: pokeDetails.data.types,
        number: pokeDetails.data.id.toString().padStart(3, "0"),
        image:
          pokeDetails.data.sprites.versions["generation-v"]["black-white"]
            .animated.front_default,
      };
      all.push(obj);
    }

    SavePokemons(all);
    pokemonsOriginal = all;
    HandlerResult(all.length, all);
    setLoading(false);
  }

  function LoadMore() {
    setTimeout(() => {
      var limit = pokemons.length + perPage;
      console.log(pokemons.length);
      if (query === undefined) {
        setPokemons(pokemonsOriginal.slice(0, limit));
      } else {
        var filterPokemons = pokemonsOriginal.filter((item) => {
          return (
            item.name.includes(query.toLowerCase()) ||
            item.number.includes(query)
          );
        });
        setPokemons(filterPokemons.slice(0, limit));
      }
    }, 1000);
  }
 const typeHandler = (event) => {
         let typeProp = event.target.value.toLowerCase();
         if(typeProp === 'all'){
             fetchPokemon();
             return;
         }
        async function fetchPokemon() {
            await axios.get('type/'+typeProp).then((result)=>{
                let pokemons = {
                    count : null,
                    next:null,
                    previous:null,
                    results : []
                };
                 pokemons.results = result.data.pokemon.map(pokemon => ({
                    name: pokemon.pokemon.name,
                    url: pokemon.pokemon.url
                }));
                setPokemons(pokemons);
            })
        }
        fetchPokemon()
     };
     
  return (
    
    <div>
     
      {/* <Header /> */}

      <Container fluid>
     
        {loading ? (
          <LoadingCard qty={12} />
        ) : (
          <InfiniteScroll
            style={{ overflow: "none" }}
            dataLength={pokemons.length}
            next={LoadMore}
            hasMore={pokemons.length < max}
            loader={
              <div className="mb-4 d-flex justify-content-center align-item-center">
                <Spinner
                  style={{ color: Colors.card_gray }}
                  animation="border"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            }
            endMessage={
              <p className="text-light" style={{ textAlign: "center" }}>
                <b>TEMUKAN HEROMU</b>
              </p>
            }
            
          >
            {/* <div class="flex items-center justify-center md:justify-start flex-wrap">
              <div class="relative inline-flex"><span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <div class="absolute flex items-center justify-center pointer-events-none">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#8A8A8A" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(138, 138, 138);">
                    <path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg></div></span>
                    <input class="py-2 pl-10 md:pr-24 lg:pr-48  w-full text-sm rounded-lg bg-primaryGray text-tertiaryGray placeholder-tertiaryGray appearance-none focus:outline-none focus:font-medium focus:border-secondaryGray" placeholder="Search for a pok??mon..." value="">
                      </div>
                      <div class="ml-2 md:ml-5 mt-3 md:mt-0">
                        <button class="bg-primaryGray px-4 py-1 rounded-lg text-white hover:border-transparent focus:outline-none  cursor-pointer transform hover:-translate-y-1 hover:shadow transition-all duration-200 ease-in-out">
                          <div class="flex justify-between">
                            <img src="/assets/pokemons/bulbasaur.png" alt="Bulbasaur" style="height: 30px; width: 30px;">
                              <img src="/assets/pokemons/charmander.png" alt="Charmander" style="height: 30px; width: 30px;"><img src="/assets/pokemons/squirtle.png" alt="Squirtle" style="height: 30px; width: 30px;">
                                </div>
                                </button></div>
                                <button class="ml-2 md:ml-5 mt-3 md:mt-0 bg-primary py-1 px-8 rounded-md text-white font-semibold  focus:outline-none transition duration-200 ease-in-out hover:bg-white hover:text-primary transform hover:-translate-y-1 cursor-pointer">Search</button></div> */}
          {/* // pekerjaan untuk pokemon */}
            
            <p className="text-light" style={{ textAlign: "center" }}>
            <div className="d-flex justify-content-center align-items-center">
      <img src="https://www.unbox.id/wp-content/uploads/2020/06/Logo-Ayo-Main-Pokemon.png " height="357" width="485"
            />
      </div>
              </p>
                  
                  
                <a href = "/App">
            <p className="text-light" style={{ textAlign: "center" }}>
            <div className="d-flex justify-content-center align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png" height="50" width="50"
            />
      </div>
              </p>
                     </a>
              <Filtering/>
              
            <Row>
              {pokemons.map((item) => {
                return (
                  <Col key={item.id} xs={12} sm={6} lg={3}>
                    <PokeCard
                      name={item.name}
                      id={item.id}
                      types={item.types}
                      click={true}
                    />
                  </Col>
                );
              })}
            </Row>
          </InfiniteScroll>
        )}
               </Container>
      <Footer />
      
    </div>
  );
}

export default Home;
