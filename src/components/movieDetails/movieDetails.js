import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js"
import { Card, Button, Spinner, Alert, Row, Col, Badge, Container } from 'react-bootstrap';
import './movieDetails.css'; // We'll create this CSS file

function MovieDetails(props) {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b565283dc7e83e50ea181e7329c96854`)
            .then((res) => {
                setMovie(res.data)
                
                setLoading(false)
            })
            .catch((err) => {
                console.log({ err })
                setError("Failed to load movie details")
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <div className="movie-details-loading">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    if (error) {
        return (
            <Container className="movie-details-container">
                <Alert variant="danger" className="movie-error">
                    {error}
                </Alert>
            </Container>
        )
    }

    if (!movie) {
        return (
            <Container className="movie-details-container">
                <Alert variant="warning" className="movie-error">
                    Movie not found
                </Alert>
            </Container>
        )
    }

    const formatCurrency = (amount) => {
        if (!amount || amount === 0) return 'N/A';
        return `$${amount.toLocaleString()}`;
    };

    const getRatingColor = (rating) => {
        if (rating >= 8) return 'success';
        if (rating >= 6) return 'warning';
        return 'danger';
    };
    console.log(movie)
    return (
        <Container fluid className="movie-details-container">
            {/* Hero Section with Backdrop */}
            <div 
                className="movie-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
                }}
            >
                <Container>
                    <Row className="hero-content">
                        <Col lg={4} className="poster-col">
                            <div className="movie-poster">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    alt={movie.title}
                                    className="poster-img"
                                />
                            </div>
                        </Col>
                        <Col lg={8} className="hero-info">
                            <h1 className="movie-title">{movie.title}</h1>
                            {movie.tagline && (
                                <p className="movie-tagline">"{movie.tagline}"</p>
                            )}
                            
                            <div className="movie-meta">
                                <Badge bg={getRatingColor(movie.vote_average)} className="rating-badge">
                                    ⭐ {movie.vote_average}/10
                                </Badge>
                                <span className="runtime">{movie.runtime} min</span>
                                <span className="release-date">{movie.release_date}</span>
                            </div>

                            <div className="genres">
                                {movie.genres?.map(genre => (
                                    <Badge key={genre.id} bg="outline-light" className="genre-badge">
                                        {genre.name}
                                    </Badge>
                                ))}
                            </div>

                            <div className="action-buttons">
                                <Button variant="primary" size="lg" className="me-3">
                                    🎬 Watch Trailer
                                </Button>
                                <Button 
                                    variant="outline-light" 
                                    href={movie.homepage} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    🌐 Official Website
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Movie Details Content */}
            <Container className="movie-content">
                <Row>
                    <Col lg={8}>
                        <Card className="details-card">
                            <Card.Body>
                                <h3>Overview</h3>
                                <p className="overview-text">{movie.overview}</p>

                                <Row className="details-grid">
                                    <Col md={6}>
                                        <div className="detail-item">
                                            <strong>📅 Release Date:</strong>
                                            <span>{movie.release_date}</span>
                                        </div>
                                        <div className="detail-item">
                                            <strong>⏱️ Runtime:</strong>
                                            <span>{movie.runtime} minutes</span>
                                        </div>
                                        <div className="detail-item">
                                            <strong>🏆 Status:</strong>
                                            <span>{movie.status}</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="detail-item">
                                            <strong>💰 Budget:</strong>
                                            <span>{formatCurrency(movie.budget)}</span>
                                        </div>
                                        <div className="detail-item">
                                            <strong>💵 Revenue:</strong>
                                            <span>{formatCurrency(movie.revenue)}</span>
                                        </div>
                                        <div className="detail-item">
                                            <strong>🌎 Language:</strong>
                                            <span>{movie.spoken_languages?.[0]?.english_name || 'N/A'}</span>
                                        </div>
                                    </Col>
                                </Row>

                                {movie.production_companies && movie.production_companies.length > 0 && (
                                    <div className="production-section">
                                        <h4>Production Companies</h4>
                                        <div className="companies">
                                            {movie.production_companies.map(company => (
                                                <Badge key={company.id} bg="secondary" className="company-badge">
                                                    {company.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className="sidebar-card">
                            <Card.Body>
                                <h5>Movie Facts</h5>
                                <div className="fact-item">
                                    <strong>Original Title:</strong>
                                    <span>{movie.original_title}</span>
                                </div>
                                <div className="fact-item">
                                    <strong>Original Language:</strong>
                                    <span>{movie.original_language?.toUpperCase()}</span>
                                </div>
                                <div className="fact-item">
                                    <strong>Popularity:</strong>
                                    <span>{movie.popularity?.toFixed(0)}</span>
                                </div>
                                
                                {movie.production_countries && movie.production_countries.length > 0 && (
                                    <div className="fact-item">
                                        <strong>Country:</strong>
                                        <span>{movie.production_countries[0].name}</span>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>

                        <Card className="sidebar-card mt-3">
                            <Card.Body>
                                <h5>Additional Info</h5>
                                <div className="additional-info">
                                    <Button 
                                        variant="outline-primary" 
                                        size="sm" 
                                        className="w-100 mb-2"
                                        href={movie.homepage} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Official Website
                                    </Button>
                                    <Button variant="outline-secondary" size="sm" className="w-100">
                                        Add to Watchlist
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MovieDetails