import {test, expect} from '@playwright/test';

test('Prueba Pke Api - Evolucion Squirtle', async ({request}, testInfo) => {

    const namePokemon =  await request.get(`https://pokeapi.co/api/v2/pokemon/squirtle`);
    let responseNamePokemon = await namePokemon.json();
    let speciesPokemonName = responseNamePokemon["species"];
    expect(await namePokemon.ok()).toBeTruthy();
    expect(await namePokemon.status()).toBe(200);

    const speciesPokemon = await request.get(speciesPokemonName["url"]);
    let responsoSpeciesPokemonName = await speciesPokemon.json();
    expect(await speciesPokemon.ok()).toBeTruthy();
    let evolution = responsoSpeciesPokemonName["evolution_chain"];
    
    const evolutionChain = await request.get(evolution["url"]);
    expect(await evolutionChain.ok()).toBeTruthy();
    expect(await evolutionChain.status()).toBe(200);
    let responseEvolutionChain = await evolutionChain.json();
    let evolutionData = responseEvolutionChain["species"];

    let stringResponseEvolutionChain = JSON.stringify(responseEvolutionChain);
    expect(stringResponseEvolutionChain).toContain("blastoise");
    expect(stringResponseEvolutionChain).toContain("wartortle");
});

test('Prueba Pke Api - Evolucion Charmander', async ({request}, testInfo) => {

    const namePokemon =  await request.get(`https://pokeapi.co/api/v2/pokemon/charmander`);
    let responseNamePokemon = await namePokemon.json();
    let speciesPokemonName = responseNamePokemon["species"];
    expect(await namePokemon.ok()).toBeTruthy();
    expect(await namePokemon.status()).toBe(200);

    const speciesPokemon = await request.get(speciesPokemonName["url"]);
    let responsoSpeciesPokemonName = await speciesPokemon.json();
    expect(await speciesPokemon.ok()).toBeTruthy();
    let evolution = responsoSpeciesPokemonName["evolution_chain"];
    
    const evolutionChain = await request.get(evolution["url"]);
    expect(await evolutionChain.ok()).toBeTruthy();
    expect(await evolutionChain.status()).toBe(200);
    let responseEvolutionChain = await evolutionChain.json();
    let evolutionData = responseEvolutionChain["species"];

    let stringResponseEvolutionChain = JSON.stringify(responseEvolutionChain);
    expect(stringResponseEvolutionChain).toContain("charmeleon");
    expect(stringResponseEvolutionChain).toContain("charizard");
});