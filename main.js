import { PRODUCTS } from "./data/products.js";
import { isExpired } from "./utils/date.js";


// Affiche les produits sous forme d'objets 
PRODUCTS.forEach((p) => console.log(p));

// Affiche le nom de chaque produit
PRODUCTS.forEach((p) => console.log(p.name));


// Filtre et affiche les produits expirés
const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);


// Calcule et affiche la valeur totale du stock
// Reduce : reduit le tableau à une seule valeur (ici la somme totale)
const total = PRODUCTS.reduce(
  (somme, p) => somme + p.price * p.quantity,
  0
);
console.log("Valeur totale du stock :", total, "MAD");

// Filtre et affiche les produits en promotion
const promo = PRODUCTS.filter(p => p.tags.includes("promo"));
console.log("Produits en promo :", promo.map(p => p.name));

// Trie et affiche les produits par prix croissant 
const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
console.log("Tri par prix croissant :", sorted.map(p => p.name));




// Calcule un nouvel id (unique) apres un delai de 300ms (Promise cree l asynchronisme et async/await permet d’attendre la résolution de la promesse.),
// l ajoute à la liste des produits 
// et affiche le nombre des produits apres l ajout.
const delay = (ms) => new Promise(res => setTimeout(res, ms));

const addProduct = async (list, newP) => {
  await delay(300);
  const id = Math.max(...list.map(p => p.id)) + 1;
  return [...list, { id, ...newP }];
};


const newList = await addProduct(PRODUCTS, {
  name: "Savon",
  category: "Hygiène",
  price: 5,
  quantity: 10,
  expiryDate: "2026-01-01",
  tags: ["hygiene"]
});


console.log("Après ajout :", newList.length, "produits");


