import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { Card, Badge, Button } from 'react-bootstrap';
import { useState } from 'react';
import "./movieCard.css"
import { useDispatch } from "react-redux";
import heartAction from "../../Redux/Actions/heartAction.js";

const MovieCard = (props) => {
    const heratDispatch = useDispatch()
    const history = useHistory();
    const [isFavorite, setIsFavorite] = useState(false);

    const getRatingColor = (rating) => {
        if (rating >= 8) return 'success';
        if (rating >= 6) return 'warning';
        return 'danger';
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const handleFavoriteClick = (e) => {
        // e.stopPropagation(); // Prevent navigation when clicking the heart
        setIsFavorite(!isFavorite);
        heratDispatch(heartAction(props))
    };

    return (
        <Card className="movie-card">
            <div className="movie-image-container">
                <Card.Img 
                    variant="top" 
                    src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`} 
                    alt={props.original_title}
                    className="movie-image"
                />
                <div className="movie-overlay">
                    <Badge bg={getRatingColor(props.vote_average)} className="rating-badge">
                        ⭐ {props.vote_average}
                    </Badge>
                </div>
                
                {/* Heart Icon for Watchlist */}
                <button 
                    className={`heart-btn ${isFavorite ? 'favorite' : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label={isFavorite ? "Remove from watchlist" : "Add to watchlist"}
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            
            <Card.Body className="card-body">
                <Card.Title className="card-title" title={props.original_title}>
                    {truncateText(props.original_title, 30)}
                </Card.Title>
                
                <Card.Text className="card-overview">
                    {truncateText(props.overview, 100)}
                </Card.Text>
                
                <div className="movie-meta">
                    <div className="meta-item">
                        <span className="meta-label">📅 Release:</span>
                        <span className="meta-value">{props.release_date}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">⭐ Rating:</span>
                        <span className="meta-value">{props.vote_average}/10</span>
                    </div>
                </div>

                <Button 
                    variant="primary" 
                    className="details-btn"
                    onClick={() => history.push(`/movie-details/${props.id}`)}
                >
                    🎬 View Details
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;