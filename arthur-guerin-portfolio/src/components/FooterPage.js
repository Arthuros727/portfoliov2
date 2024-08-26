import React, { useState, useEffect } from 'react';
import './FooterPage.css';

const FooterPage = ({ commentsRef }) => {
  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState(''); 

//récupérer les commentaires depuis l'API
  const fetchComments = async () => {
    try {
      const response = await fetch('https://arthur-guerin.dev/get_comments.php');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires:', error);
    }
  };

  // envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newComment.trim() === '') return; 

    try {
      const response = await fetch('https://arthur-guerin.dev/submit-comment.php', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: newComment }),
      });

      if (response.ok) {
        setNewComment(''); // Efface le champ de saisie
        fetchComments(); // Recharge les commentaires après l'ajout d'un nouveau commentaire
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du commentaire:', error);
    }
  };

  useEffect(() => {
    fetchComments(); // Charge les commentaires à l'initialisation
  }, []);

  return (
    <div className="footer-container">
    <p id='commentaire'>Laissez un commentaire !</p>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Écrivez votre commentaire ici..."
        />
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
      
      <div className="comments-list" ref={commentsRef}>
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            {comment.data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterPage;
