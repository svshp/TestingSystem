import React, { Component } from 'react';

import img01 from '../../images/gallerry/01 -  362 -  171.png';
import img02 from '../../images/gallerry/02 -  295 -  294.gif';
import img03 from '../../images/gallerry/03 - 1920 - 1080.jpg';
import img04 from '../../images/gallerry/04 -  375 -   80.gif';
import img05 from '../../images/gallerry/05 - 1600 - 1167.png';
import img06 from '../../images/gallerry/06 -  150 -  150.png';
import img07 from '../../images/gallerry/07 -  650 -  300.jpg';

import './pageMain.scss';

class PageMain extends Component {
    render() {
        return (
            <div className='page-main'>
                <div className='page-main__info row'>
                    <div className='page-main__info_block col-12 col-md-6'>
                        <h3>Что такое Lorem Ipsum?</h3>
                        <p>
                            <strong>Lorem Ipsum</strong> - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                            используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
                            без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                            Его популяризации в новое время послужили публикация листов Letraset с образцами
                            Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки
                            типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                        </p>
                    </div>
                    <div className='page-main__info_block col-12 col-md-6'>
                        <h3>Почему он используется?</h3>
                        <p>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                        Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное
                        заполнение шаблона, а также реальное распределение букв и пробелов в абзацах,
                        которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст..
                        Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML
                        используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам
                        "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.
                        За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке,
                        некоторые - намеренно (например, юмористические варианты).
                        </p>
                    </div>
                    <div className='page-main__info_block col-12 col-md-6'>
                        <h3>Откуда он появился?</h3>
                        <p>
                            Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
                            Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых
                            странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.
                            В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги
                            "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э.
                            Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32.
                        </p>
                        <p>
                            Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы
                            1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод,
                            сделанный H. Rackham, 1914 год.
                        </p>
                    </div>
                    <div className='page-main__info_block col-12 col-md-6'>
                        <h3>Где его взять?</h3>
                        <p>
                            Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации,
                            например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
                            Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки,
                            скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют
                            один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.
                            Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором.
                            Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений.
                            В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей
                            или "невозможных" слов.
                        </p>
                    </div>
                </div>
                <div className='page-main__gallery'>
                    <h2>Gallery</h2>
                    <div className='page-main__gallery_container'>
                        <div className='page-main__gallery_container-img01'>
                            <img src={img01} alt='img01'/>
                        </div>
                        <div className='page-main__gallery_container-img02'>
                            <img src={img02} alt='img02'/>
                        </div>
                        <div className='page-main__gallery_container-img03'>
                            <img src={img03} alt='img03'/>
                        </div>
                        <div className='page-main__gallery_container-img04'>
                            <img src={img04} alt='img04'/>
                        </div>
                        <div className='page-main__gallery_container-img05'>
                            <img src={img05} alt='img05'/>
                        </div>
                        <div className='page-main__gallery_container-img06'>
                            <img src={img06} alt='img06'/>
                        </div>
                        <div className='page-main__gallery_container-img07'>
                            <img src={img07} alt='img07'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageMain;