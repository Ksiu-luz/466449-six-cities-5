﻿import { useState, FormEvent } from 'react';
import { sendReview } from '../../store/ApiActions';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { addErrorMessage } from '../../store/slices/ErrorsSlice';

export function ReviewForm() {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    disabled: false,
  });

  const offerId = useAppSelector((state) => state.currentOffer.offer?.id);
  const dispatch = useAppDispatch();

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value} = e.target;
    setFormData({...formData, rating: Number(value)});
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, comment: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (offerId === undefined) {
      return;
    }
    setFormData({ ...formData, disabled: true });
    dispatch(
      sendReview({
        offerId,
        formData: { comment: formData.comment, rating: formData.rating },
      })
    )
      .unwrap()
      .then(() => {
        setFormData({ rating: 0, comment: '', disabled: false });
      })
      .catch(() => {
        dispatch(addErrorMessage('Error orrured while sending review'));
        setFormData({ ...formData, disabled: false });
      });
  };


  return (
    <form
      className="reviews__form form"
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={5}
          id="5-stars"
          type="radio"
          checked={formData.rating === 5}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={4}
          id="4-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 4}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={3}
          id="3-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 3}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={2}
          id="2-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 2}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={1}
          id="1-star"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 1}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleCommentChange}
        disabled={formData.disabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            formData.disabled ||
            formData.comment.length > 300 ||
            formData.comment.length < 50 ||
            formData.rating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
