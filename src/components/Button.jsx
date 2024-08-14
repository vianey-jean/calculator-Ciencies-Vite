// eslint-disable-next-line no-unused-vars
import React from 'react';
// On suppose que le CSS est sauvegardé dans Button.css

// Composant Button qui reçoit diverses props pour gérer les fonctionnalités d'une calculatrice
const Button = ({
  handleButton,       // Fonction pour gérer les clics sur les boutons
  calculation,        // Fonction pour évaluer les expressions
  percentage,         // Fonction pour calculer le pourcentage
  change_sign,        // Fonction pour changer le signe des données actuelles
  clear_all,          // Fonction pour effacer toutes les données
  memoryClear,        // Fonction pour effacer la mémoire
  memoryAdd,          // Fonction pour ajouter les données actuelles à la mémoire
  memorySubtract,     // Fonction pour soustraire les données actuelles de la mémoire
  memoryRecall,       // Fonction pour rappeler la valeur de la mémoire
  toggleSecond,       // Fonction pour basculer les fonctions secondaires
  isSecond,           // État indiquant si les fonctions secondaires sont activées
  square,             // Fonction pour calculer le carré
  cube,               // Fonction pour calculer le cube
  powerY,             // Fonction pour calculer la puissance de y
  exp,                // Fonction pour calculer l'exponentielle
  tenPower,           // Fonction pour calculer la puissance de 10
  reciprocal,         // Fonction pour calculer le réciproque
  sqrt,               // Fonction pour calculer la racine carrée
  cbrt,               // Fonction pour calculer la racine cubique
  yRootX,             // Fonction pour calculer la racine y de x
  ln,                 // Fonction pour calculer le logarithme naturel
  logTen,             // Fonction pour calculer le logarithme en base 10
  factorial,          // Fonction pour calculer la factorielle
  sin,                // Fonction pour calculer le sinus
  cos,                // Fonction pour calculer le cosinus
  tan,                // Fonction pour calculer la tangente
  sinh,               // Fonction pour calculer le sinus hyperbolique
  cosh,               // Fonction pour calculer le cosinus hyperbolique
  tanh,               // Fonction pour calculer la tangente hyperbolique
  insertE,            // Fonction pour insérer la valeur du nombre d'Euler
  insertPi,           // Fonction pour insérer la valeur de Pi
  generateRandom,     // Fonction pour générer un nombre aléatoire
  scientificNotation, // Fonction pour insérer la notation scientifique
  toggleRadDeg,       // Fonction pour basculer entre radians et degrés
  toggleTheme,        // Fonction pour basculer entre les thèmes clair et sombre
  theme,              // État actuel du thème (clair ou sombre)
}) => {

  // Liste de tous les boutons à afficher
  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '/',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '*',
    '¹/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=', 'Theme'
  ];

  return (
    // Conteneur pour les boutons avec une disposition en grille réactive
    <div className="grid grid-cols-10 md:grid-cols-10 h-[50vh] w-[100%] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
      {buttons.map((btn, index) => (
        // Élément bouton individuel avec des classes dynamiques et gestion des événements
        <button
          className={`border border-black text-[12px] md:font-normal md:text-xl ${theme === 'dark' ? 'bg-dark_grey text-white' : 'bg_white text-white'} ${
            index === 16 || index === 17 || index === 18 || index === 26 || index === 27 || index === 28 || index === 36 || index === 37 || index === 38 || index === 46 || index === 47 ? 'bg-light' : ''
          } ${index === 9 || index === 19 || index === 29 || index === 39 || index === 48 ? 'bg-yellow' : ''} ${
            index === 46 ? 'col-span-2' : ''
          } ${index === 49 ? 'col-span-10' : ''} hover:bg-gray-400`}
          key={index}
          value={btn}
          
          // Gestion de l'événement onClick pour appliquer la fonctionnalité du bouton en fonction de sa valeur
          onClick={(e) => {
            if (btn === 'C') clear_all();                   // Effacer toutes les données
            else if (btn === '+/-') change_sign();          // Changer le signe des données
            else if (btn === '%') percentage();             // Calculer le pourcentage
            else if (btn === '=') calculation();            // Évaluer l'expression
            else if (btn === 'mc') memoryClear();           // Effacer la mémoire
            else if (btn === 'm+') memoryAdd();             // Ajouter aux données mémorisées
            else if (btn === 'm-') memorySubtract();        // Soustraire des données mémorisées
            else if (btn === 'mr') memoryRecall();          // Rappeler la valeur de la mémoire
            else if (btn === '2nd') toggleSecond();         // Basculer les fonctions secondaires
            else if (btn === 'x²') square();                // Calculer le carré
            else if (btn === 'x³') cube();                  // Calculer le cube
            else if (btn === 'xʸ') powerY();                // Calculer la puissance de y
            else if (btn === 'eˣ') exp();                   // Calculer l'exponentielle
            else if (btn === '10ˣ') tenPower();             // Calculer la puissance de 10
            else if (btn === '¹/x') reciprocal();           // Calculer le réciproque
            else if (btn === '²√x') sqrt();                 // Calculer la racine carrée
            else if (btn === '³√x') cbrt();                 // Calculer la racine cubique
            else if (btn === 'ʸ√x') yRootX();               // Calculer la racine y de x
            else if (btn === 'ln') ln();                    // Calculer le logarithme naturel
            else if (btn === 'log₁₀') logTen();             // Calculer le logarithme en base 10
            else if (btn === 'x!') factorial();             // Calculer la factorielle
            else if (btn === 'sin') sin();                  // Calculer le sinus
            else if (btn === 'cos') cos();                  // Calculer le cosinus
            else if (btn === 'tan') tan();                  // Calculer la tangente
            else if (btn === 'e') insertE();                // Insérer le nombre d'Euler
            else if (btn === 'EE') scientificNotation();    // Insérer la notation scientifique
            else if (btn === 'Rad') toggleRadDeg();         // Basculer entre radians et degrés
            else if (btn === 'sinh') sinh();                // Calculer le sinus hyperbolique
            else if (btn === 'cosh') cosh();                // Calculer le cosinus hyperbolique
            else if (btn === 'tanh') tanh();                // Calculer la tangente hyperbolique
            else if (btn === 'π') insertPi();               // Insérer la valeur de Pi
            else if (btn === 'Rand') generateRandom();      // Générer un nombre aléatoire
            else if (btn === 'Theme') toggleTheme();        // Basculer entre les thèmes clair et sombre
            else handleButton(e);                           // Gérer les autres clics de boutons
          }}
        >
          {btn} 
          {/* Afficher l'étiquette du bouton */}
        </button>
      ))}
    </div>
  );
};

export default Button;
