import React from 'react';
import { useTranslation } from 'react-i18next';



function Inter() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {

        i18n.changeLanguage(lang);
    }
        
    return(
        <div>
            <button onClick={()=>handleClick('ru')}>
                Русский
            </button>
            <button onClick={()=>handleClick('en')}>
                English
            </button>
            <p>{t('test.1')}</p>
        </div>
    )

}

export default Inter;