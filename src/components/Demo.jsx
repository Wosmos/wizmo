import React, { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState('');

  // RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      // update state and local storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className=' mt-16 w-full max-w-xl'>
      {/* Search */}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5 object-contain filter invert'
          />

          <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            onKeyDown={handleKeyDown}
            required
            className='url_input peer '
          />
          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700  rounded-2xl '
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse History */}
        <section className='flex flex-col gap-1 max-h-60 overflow-y-auto '>
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card transition-all ease-in   hover:bg-white/20'
            >
              <div className='copy_btn ' onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? 'tick_icon' : 'copy_icon'}
                  className='w-[40%] h-[40%] object-contain filter invert'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-100 font-medium text-sm truncate '>
                {item.url}
              </p>
            </div>
          ))}
        </section>
      </div>
      {/* <FroalaEditor /> */}
      {/* Display Result */}
      <article className=' my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-white text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-300'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-300 text-xl  text-center'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-300 '>
                  {article.summary}
                </p>
                <div
                  className='absolute right-3 -bottom-3 m-0 px-2 py-1 rounded-md  backdrop-blur flex justify-center items-center cursor-pointer    bg-gradient-to-r from-blue-600 to-cyan-600 '
                  onClick={() => handleCopy(article.summary)}
                >
                  <div className="absolute w-[80%] h-[80%] z-20 hover:bg-blue-50/20 rounded-[4px] transition-all ease-in"/>
                  <img
                    src={copied === article.summary ? tick : copy}
                    alt={copied === article.summary ? 'tick_icon' : 'copy_icon'}
                    className='w-[40%] h-[40%] object-contain filter invert'
                  />
                  <span className='text-white text-xs ml-1'>
                    {copied === article.summary ? 'Copied' : 'Copy'}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </article>
    </section>
  );
};

export default Demo;
