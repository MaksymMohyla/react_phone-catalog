import { Product } from '../../../features/types/Product';
import cl from './ProductCard.module.scss';

type Props = { product: Product };

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className={cl.cardContainer}>
      <img src={product.image} alt={product.name} className={cl.img} />

      <h3 className={cl.title}>{product.name}</h3>

      <div className={cl.priceContainer}>
        <p className={cl.priceContainer__price}>{`$${product.price}`}</p>
        {product.fullPrice !== product.price && (
          <del>
            <p
              className={cl.priceContainer__fullPrice}
            >{`$${product.fullPrice}`}</p>
          </del>
        )}
      </div>

      <div className={cl.divider} />

      <dl className={cl.chars}>
        <div className={cl.chars__line}>
          <dt className={cl.chars__definition}>Screen</dt>
          <dd className={cl.chars__value}>{product.screen}</dd>
        </div>

        <div className={cl.chars__line}>
          <dt className={cl.chars__definition}>Capacity</dt>
          <dd className={cl.chars__value}>{product.capacity}</dd>
        </div>

        <div className={cl.chars__line}>
          <dt className={cl.chars__definition}>RAM</dt>
          <dd className={cl.chars__value}>{product.ram}</dd>
        </div>
      </dl>

      <div className={cl.buttonContainer}>
        <button className={cl.buttonContainer__cardButton}>Add to cart</button>
        <button className={cl.buttonContainer__favButton}>
          <svg className={cl.buttonContainer__favButtonIcon} />
        </button>
      </div>
    </article>
  );
};