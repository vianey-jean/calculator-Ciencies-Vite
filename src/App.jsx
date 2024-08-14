// Importation des dépendances nécessaires depuis React et d'autres packages
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Button from "./components/Button"; // Composant personnalisé pour les boutons
import Confetti from "react-confetti-explosion"; // Effet de confettis pour les célébrations
import "./App.css"; // Importation du fichier CSS pour le style
import { Textfit } from "react-textfit"; // Composant pour ajuster dynamiquement la taille du texte

// Fonction principale du composant App
function App() {
  // État pour stocker les données actuelles saisies dans la calculatrice
  const [data, setData] = useState("");
  
  // État pour stocker la mémoire de la calculatrice (valeur stockée/rappelée)
  const [memory, setMemory] = useState(0);
  
  // État pour contrôler l'affichage de l'animation de confettis, basée sur des conditions spécifiques
  const [showConfetti, setShowConfetti] = useState(false);
  
  // État pour basculer entre les fonctions secondaires (par ex., fonctions mathématiques avancées)
  const [isSecond, setIsSecond] = useState(false);
  
  // État pour basculer entre les degrés et les radians pour les calculs trigonométriques
  const [inDegrees, setInDegrees] = useState(true);
  
  // État pour basculer entre le thème clair et le thème sombre de l'interface
  const [theme, setTheme] = useState("light");
  
  // État pour stocker l'historique des calculs effectués par l'utilisateur
  const [history, setHistory] = useState([]);

  // Effet pour afficher les confettis lorsque les données contiennent à la fois "5" et "6"
  const checkConfetti = () => {
    // Expression régulière pour vérifier si "5" et "6" sont présents dans les données, dans n'importe quel ordre
    const regex = /\b5\b.*\b6\b|\b6\b.*\b5\b/;
    
    // Test pour voir si les données actuelles correspondent à l'expression régulière
    if (regex.test(data)) {
      // Si c'est vrai, définir showConfetti à true pour déclencher l'animation de confettis
      setShowConfetti(true);
      
      // Masquer l'animation de confettis après 3 secondes
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  // Effet pour mettre à jour la classe du document et la couleur d'arrière-plan du body lorsque le thème change
  useEffect(() => {
    // Définir la classe de l'élément racine du document sur le thème actuel
    document.documentElement.className = theme;
    
    // Changer la couleur d'arrière-plan du body en fonction du thème actuel
    document.body.style.backgroundColor = theme === 'dark' ? '#1a202c' : '#f7fafc';
  }, [theme]); // Exécuter cet effet à chaque fois que le thème change

  // Fonction pour gérer les clics sur les boutons et mettre à jour les données actuelles
  function handleButton(e) {
    // Concaténer la valeur du bouton aux données actuelles
    setData(data.concat(e.target.value));
  }

  // Fonction pour évaluer l'expression actuelle, mettre à jour les données et l'historique, et vérifier les confettis
  function calculation() {
    try {
      // Évaluer l'expression dans data et convertir le résultat en chaîne de caractères
      const result = eval(data).toString();
      
      // Vérifier si les confettis doivent être affichés en fonction du résultat
      checkConfetti();
      
      // Mettre à jour l'état history avec le calcul actuel
      setHistory([...history, `${data} = ${result}`]);
      
      // Mettre à jour l'état data avec le résultat
      setData(result);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // En cas d'erreur lors de l'évaluation, définir data à "Erreur"
      setData("Erreur");
    }
  }

  // Fonction pour calculer le pourcentage
  function percentage() {
    const result = (parseFloat(data) / 100).toString();
    setData(result);
  }

  // Fonction pour effacer toutes les données
  function clear_all() {
    setData("");
  }

  // Fonction pour changer le signe des données actuelles
  function change_sign() {
    const result = (parseFloat(data) * -1).toString();
    setData(result);
  }

  // Fonction pour effacer la mémoire
  function memoryClear() {
    setMemory(0);
  }

  // Fonction pour ajouter les données actuelles à la mémoire
  function memoryAdd() {
    setMemory(memory + parseFloat(data));
    setData("");
  }

  // Fonction pour soustraire les données actuelles de la mémoire
  function memorySubtract() {
    setMemory(memory - parseFloat(data));
    setData("");
  }

  // Fonction pour rappeler la valeur de la mémoire
  function memoryRecall() {
    setData(memory.toString());
  }

  // Fonction pour basculer les fonctions secondaires
  function toggleSecond() {
    setIsSecond(!isSecond);
  }

  // Fonction pour basculer entre les radians et les degrés
  function toggleRadDeg() {
    setInDegrees(!inDegrees);
  }

  // Fonction pour calculer le carré
  function square() {
    const result = Math.pow(parseFloat(data), 2).toString();
    setData(result);
  }

  // Fonction pour calculer le cube
  function cube() {
    const result = Math.pow(parseFloat(data), 3).toString();
    setData(result);
  }

  // Fonction pour calculer la puissance y
  function powerY() {
    const [base, exponent] = data.split("^");
    const result = Math.pow(parseFloat(base), parseFloat(exponent)).toString();
    setData(result);
  }

  // Fonction pour calculer l'exponentielle
  function exp() {
    const result = Math.exp(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer la puissance de 10
  function tenPower() {
    const result = Math.pow(10, parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer le réciproque
  function reciprocal() {
    const result = (1 / parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer la racine carrée
  function sqrt() {
    const result = Math.sqrt(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer la racine cubique
  function cbrt() {
    const result = Math.cbrt(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer la racine y de x
  function yRootX() {
    const [y, x] = data.split("√");
    const result = Math.pow(parseFloat(x), 1 / parseFloat(y)).toString();
    setData(result);
  }

  // Fonction pour calculer le logarithme naturel
  function ln() {
    const result = Math.log(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer le logarithme en base 10
  function logTen() {
    const result = Math.log10(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer la factorielle
  function factorial() {
    const n = parseInt(data);
    if (n === 0 || n === 1) {
      setData("1");
      return;
    }
    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }
    setData(result.toString());
  }

  // Fonction pour calculer le sinus
  function sin() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.sin(angle * (Math.PI / 180)) : Math.sin(angle);
    setData(result.toString());
  }

  // Fonction pour calculer le cosinus
  function cos() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.cos(angle * (Math.PI / 180)) : Math.cos(angle);
    setData(result.toString());
  }

  // Fonction pour calculer la tangente
  function tan() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.tan(angle * (Math.PI / 180)) : Math.tan(angle);
    setData(result.toString());
  }

  // Fonction pour calculer le sinus hyperbolique
  function sinh() {
    const result = Math.sinh(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer le cosinus hyperbolique
  function cosh() {
    const result = Math.cosh(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour calculer la tangente hyperbolique
  function tanh() {
    const result = Math.tanh(parseFloat(data)).toString();
    setData(result);
  }

  // Fonction pour insérer la valeur du nombre d'Euler
  function insertE() {
    setData(data.concat(Math.E.toString()));
  }

  // Fonction pour insérer la valeur de Pi
  function insertPi() {
    setData(data.concat(Math.PI.toString()));
  }

  // Fonction pour générer un nombre aléatoire
  function generateRandom() {
    const result = Math.random().toString();
    setData(result);
  }

  // Fonction pour insérer la notation scientifique
  function scientificNotation() {
    setData(data.concat("e"));
  }

  // Fonction pour basculer le thème entre clair et sombre
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Rendu du composant
  return (
    // Div principale du conteneur avec des classes dynamiques basées sur le thème et la taille de l'écran
    <div className={`container ${theme} h-screen w-screen overflow-hidden`}>
      
      {/* Wrapper de la calculatrice */}
      <div className="calculator">
        
        {/* Petits cercles pour simuler les boutons de contrôle d'une fenêtre */}
        <div className="flex gap-1 -mb-5 ml-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        {/* Composant Textfit pour ajuster dynamiquement la taille du texte */}
        <Textfit className={`display w-[100%] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] ${theme === 'dark' ? 'bg-white' : 'bg-dark_grey text-white'}`}>
          {data ? data : '0'}
          {/* Afficher les données actuelles ou '0' si data est vide */}
        </Textfit>
        
        {/* Rendu du composant Confetti si showConfetti est vrai */}
        {showConfetti && <Confetti />}
        
        {/* Composant personnalisé pour les boutons avec tous les props et gestionnaires d'événements nécessaires */}
        
        <Button
          handleButton={handleButton} // Fonction pour gérer les clics sur les boutons
          calculation={calculation} // Fonction pour évaluer les expressions
          percentage={percentage} // Fonction pour calculer le pourcentage
          change_sign={change_sign} // Fonction pour changer le signe des données actuelles
          clear_all={clear_all} // Fonction pour effacer toutes les données
          memoryClear={memoryClear} // Fonction pour effacer la mémoire
          memoryAdd={memoryAdd} // Fonction pour ajouter les données actuelles à la mémoire
          memorySubtract={memorySubtract} // Fonction pour soustraire les données actuelles de la mémoire
          memoryRecall={memoryRecall} // Fonction pour rappeler la valeur stockée en mémoire
          toggleSecond={toggleSecond} // Fonction pour basculer vers les fonctions secondaires
          isSecond={isSecond} // État indiquant si les fonctions secondaires sont activées
          square={square} // Fonction pour calculer le carré d'un nombre
          cube={cube} // Fonction pour calculer le cube d'un nombre
          powerY={powerY} // Fonction pour calculer la puissance d'un nombre avec un exposant y
          exp={exp} // Fonction pour calculer l'exponentielle d'un nombre
          tenPower={tenPower} // Fonction pour calculer la puissance de 10 d'un nombre
          reciprocal={reciprocal} // Fonction pour calculer le réciproque d'un nombre
          sqrt={sqrt} // Fonction pour calculer la racine carrée d'un nombre
          cbrt={cbrt} // Fonction pour calculer la racine cubique d'un nombre
          yRootX={yRootX} // Fonction pour calculer la racine y-ième d'un nombre x
          ln={ln} // Fonction pour calculer le logarithme naturel (ln) d'un nombre
          logTen={logTen} // Fonction pour calculer le logarithme en base 10 d'un nombre
          factorial={factorial} // Fonction pour calculer la factorielle d'un nombre
          sin={sin} // Fonction pour calculer le sinus d'un angle
          cos={cos} // Fonction pour calculer le cosinus d'un angle
          tan={tan} // Fonction pour calculer la tangente d'un angle
          sinh={sinh} // Fonction pour calculer le sinus hyperbolique d'un nombre
          cosh={cosh} // Fonction pour calculer le cosinus hyperbolique d'un nombre
          tanh={tanh} // Fonction pour calculer la tangente hyperbolique d'un nombre
          insertE={insertE} // Fonction pour insérer la valeur du nombre d'Euler (e)
          insertPi={insertPi} // Fonction pour insérer la valeur de Pi
          generateRandom={generateRandom} // Fonction pour générer un nombre aléatoire
          scientificNotation={scientificNotation} // Fonction pour insérer une notation scientifique
          toggleRadDeg={toggleRadDeg} // Fonction pour basculer entre radians et degrés
          toggleTheme={toggleTheme} // Fonction pour basculer entre les thèmes clair et sombre
          theme={theme} // État actuel du thème (clair ou sombre)
        />

      </div>
      
      {/* Section de l'historique pour afficher l'historique des calculs */}
      <div className="history relative overflow-x-hidden">
        <h2 className={`${theme === "light" ? 'dark' : 'fixed z-10'}`}>Historique</h2>
        <ul className="absolute top-10 left-2">
          {history.map((item, index) => (
            <li key={index}>{item}</li> // Itérer sur le tableau history et afficher chaque élément
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
