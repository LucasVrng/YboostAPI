import React, { useState, useEffect } from 'react';
import CountryList from 'react-select-country-list';
import { useNavigate, useParams } from 'react-router-dom';

function RecipeCreation() {
    const [formData, setFormData] = useState({
        name: '',
        time: '',
        instructions: '',
        country: '',
        image_url: '',
        how_many: '',
        ingredients: '',
        is_vegan: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    useEffect(() => {
        if (isEditMode) {
            setLoading(true);
            fetch(`http://127.0.0.1:5000/api/recipes/${id}`)
                .then(res => res.json())
                .then(data => {
                    // Pre-fill form with existing data, handling potential undefined values
                    setFormData({
                        name: data.name || '',
                        time: data.time || '',
                        instructions: data.instructions || '',
                        country: data.country || '',
                        image_url: data.image_url || '',
                        how_many: data.how_many || '',
                        ingredients: data.ingredients ? data.ingredients.map(i => i.name || i).join(', ') : '',
                        is_vegan: data.is_vegan || ''
                    });
                    setLoading(false);
                })
                .catch(err => {
                    setError('Erreur lors du chargement de la recette.');
                    setLoading(false);
                });
        }
    }, [id, isEditMode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const url = isEditMode 
                ? `http://127.0.0.1:5000/api/recipes/${id}` 
                : 'http://127.0.0.1:5000/api/recipes';
                
            const method = isEditMode ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setLoading(false);
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message || (isEditMode ? 'Erreur lors de la modification' : 'Erreur lors de la création'));
                setLoading(false);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setError('Erreur de connexion au serveur.');
            setLoading(false);
        }
    };

    return (
        <main className='RecipeCreate'>
            <h1>{isEditMode ? 'Modifiez votre recette' : 'Créez votre recette'}</h1>
            {error && (
                <p className='RecipeCreate__Error'>
                    {error}
                </p>
            )}
            <form className='RecipeCreate__Form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Nom de la recette'
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
                <input
                    type='number'
                    id='time'
                    name='time'
                    placeholder='Temps de cuisson'
                    value={formData.time}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
                <input
                    type='text'
                    id='instructions'
                    name='instructions'
                    placeholder='Instructions'
                    value={formData.instructions}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
                <select
                    id='country'
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                    disabled={loading}
                    required
                >
                    <option value="" disabled>Pays d'origine</option>
                    {CountryList().getData().map((country) => (
                        <option key={country.value} value={country.label}>
                            {country.label}
                        </option>
                    ))}
                </select>
                <input
                    type='text'
                    id='image_url'
                    name='image_url'
                    placeholder='Image url'
                    value={formData.image_url}
                    onChange={handleChange}
                    disabled={loading}
                />
                <input
                    type='text'
                    id='how_many'
                    name='how_many'
                    placeholder='How many'
                    value={formData.how_many}
                    onChange={handleChange}
                    disabled={loading}
                />
                <input
                    type='text'
                    id='ingredients'
                    name='ingredients'
                    placeholder='Ingredients'
                    value={formData.ingredients}
                    onChange={handleChange}
                    disabled={loading}
                />
                <input
                    type='text'
                    id='is_vegan'
                    name='is_vegan'
                    placeholder='Is vegan'
                    value={formData.is_vegan}
                    onChange={handleChange}
                    disabled={loading}
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'En cours...' : (isEditMode ? 'Modifier' : 'Créer')}
                </button>
            </form>
        </main>
    );
}

export default RecipeCreation;