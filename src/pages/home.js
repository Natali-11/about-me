// @flow
import React, { useState } from 'react';
import { styled } from 'fusion-plugin-styletron-react';
import { assetUrl } from 'fusion-core';

const Page = styled('div', {
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  backgroundImage:
    'linear-gradient(90deg, rgba(110, 150, 90, 0.5) 50%, transparent 50%),' +
    'linear-gradient(rgba(110, 150, 90, 0.5) 50%, transparent 50%)',
  backgroundSize: '80px 80px',
  padding: '40px',
  fontFamily: 'Georgia, serif',
  color: '#153e09',
});

const Title = styled('h1', {
  textDecoration: 'underline',
  textDecorationColor: '#a32d54',
  textDecorationThickness: '4px',
  textUnderlineOffset: '10px',
  fontSize: '64px',
  fontStyle: 'italic',
  margin: 0,
});

const Subtitle = styled('h2', {
  color: '#a32d54',
  fontSize: '28px',
  fontStyle: 'italic',
  animationName: {
    '0%': { textShadow: '0 0 4px #ffffff, 0 0 8px #ff5f6a' },
    '50%': { textShadow: '0 0 8px #ffffff, 0 0 20px #ff5f6a, 0 0 30px #ff5f6a' },
    '100%': { textShadow: '0 0 4px #ffffff, 0 0 8px #ff5f6a' },
  },
  animationDuration: '3s',
  animationIterationCount: 'infinite',
});

const Text = styled('p', {
  transition: 'transform 0.2s',
  ':hover': { transform: 'translateY(-4px)' },
  fontSize: '18px',
  lineHeight: 1.6,
});

const Block = styled('div', {
  maxWidth: '800px',
  padding: '10px 30px',
  backgroundColor: 'rgba(255, 255, 255, 0.74)',
  borderRadius: '20px',
});

const List = styled('ul', {
  fontSize: '20px',
  color: '#c9e8cb',
  backgroundColor: '#8a4c65',
  padding: '20px 40px',
  borderRadius: '20px',
  lineHeight: 1.6,
});

const Item = styled('li', {
  transition: 'transform 0.2s',
  ':hover': { transform: 'translateY(-4px)' },
});

const Link = styled('a', {
  color: '#4f6a28',
  fontSize: '20px',
  marginRight: '20px',
  ':hover': { color: '#6ba555' },
});

const Card = styled('div', {
  maxWidth: '1500px',
  margin: '0 auto',
  backgroundColor: '#fff8f3',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
});

const Cell = styled('div', {
  padding: '30px',
  border: '1px solid #e04848',
});

const PhotoFrame = styled('div', {
  position: 'relative',
  display: 'inline-block',
  margin: '20px',
});

const Square = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#b53036',
  transform: 'rotate(6deg)',
});

const Photo = styled('img', {
  position: 'relative',
  display: 'block',
  width: '350px',
  transform: 'rotate(-4deg)',
  transition: 'transform 0.4s',
  ':hover': { transform: 'rotate(0deg)' },
});

const Pattern = styled('img', {
  display: 'block',
  width: '250px',
  margin: '20px auto 0',
  borderRadius: '15px',
});


const hobbies = [
  'Рисование — рисую с детства, в свободное время делаю арты в Paint Tool Sai 2 или в скетчбуке',
  'Хип-хоп — почти год занималась танцами и мечтаю к ним вернуться',
  'Тренажёрный зал — помогает отвлечься от учёбы',
  'Английский язык — смотрю мультфильмы в оригинале, чтобы пополнить vocabulary',
  'Blender — в школе делала проект по 3D-моделированию и хочу развиваться в этом направлении',
];

const contacts = [
  { name: 'Telegram', url: 'https://t.me/molinat1' },
  { name: 'Почта', url: 'mailto:pomolcevanatasa73@gmail.com' },
  { name: 'ВКонтакте', url: 'https://vk.ru/wai_kl' },
];

const skills = ['C++', "HTML и CSS", 'JavaScript', 'React', 'Fusion.js', 'Ассемблер', 'Blender', 'Figma', 'Paint Tool Sai'];

const Tags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

const Tag = styled('span', {
  padding: '4px 12px',
  border: '1.5px solid #a32d54',
  borderRadius: '20px',
  color: '#a32d54',
  fontSize: '16px',
});

const catAwake = assetUrl('../photo/awake.gif');
const catLieDown = assetUrl('../photo/lie-down.gif');
const catGetUp = assetUrl('../photo/get-up.gif');
const catSleep = assetUrl('../photo/sleep.gif');

const WideCell = styled('div', {
  gridColumn: '1 / -1',
  display: 'flex',
  gap: '40px',
  padding: '30px',
  border: '1px solid #e04848',
});

const CatImage = styled('img', {
  width: '400px',
  aspectRatio: '4 / 3',
  borderRadius: '30px',
  backgroundColor: '#ffc59c',
});

const Button = styled('button', {
  color: '#f8fa81',
  display: 'block',
  margin: '15px auto 0',
  fontSize: '32px',
  padding: '5px 20px',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '#a73562',
  cursor: 'pointer',
});


const Home = () => {
  const [isNight, setIsNight] = useState(false);
  const [cat, setCat] = useState(catAwake);

  const toggle = () => {
    if (isNight) {
      setCat(catGetUp);
      setTimeout(() => setCat(catAwake), 1350);
    } else {
      setCat(catLieDown);
      setTimeout(() => setCat(catSleep), 1350);
    }
    setIsNight(!isNight);
  };

  return (
    <Page>
      <Card>
        <Grid>
          <Cell>
            <PhotoFrame>
              <Square />
              <Photo src={assetUrl('../photo/img1.jpg')} alt="Моё фото" title="Это лето было особенным" />
            </PhotoFrame>
          </Cell>
          <Cell>
            <Title>Привет, я Наталья Помольцева!</Title>
            <Subtitle>Краткая биография</Subtitle>
            <Block>
              <Text>
                Я родилась и выросла в Усть-Каменогорске, на востоке Казахстана.
                Ещё в школе я полюбила математику и информатику: учительница
                отправляла меня на олимпиады и занималась со мной дополнительно в свободное от учёбы время.
                Именно она посоветовала мне НГТУ в Новосибирске.
              </Text>
              <Text>
                Чтобы поступить, я переехала в Россию, окончила Лицей №7 в Рубцовске
                и сдала ЕГЭ по математике, информатике и русскому языку. Сейчас
                я учусь на факультете прикладной математики и информатики НГТУ.
              </Text>
              <Text>
                За это время я сменила город и окружение и поняла, что хочу
                развиваться не только в программировании. Меня привлекает
                3D-моделирование, а недавно появилась возможность попробовать
                себя в спорте.
              </Text>
            </Block>
          </Cell>
          <Cell>
            <Subtitle>Где меня найти?</Subtitle>
            {contacts.map((contact) => (
              <Link
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
              >
                {contact.name}
              </Link>
            ))}
            <Subtitle>Навыки</Subtitle>
            <Text>Знаю азы или пробовала работать:</Text>
            <Tags>
              {skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </Tags>
          </Cell>
          <Cell>
            <Subtitle>Мои хобби</Subtitle>
            <List>
              {hobbies.map((hobby) => (
                <Item key={hobby}>{hobby}</Item>
              ))}
            </List>
            <Pattern src={assetUrl('../photo/pattern.jpg')} alt="Кошка на полянке" />
          </Cell>
          <WideCell>
            <div>
              <CatImage key={cat} src={cat} alt="Кот" />
              <Button onClick={toggle}>{isNight ? '☀︎' : '⏾'}</Button>
            </div>
            <div>
              <Subtitle>Моя учёба</Subtitle>
              <Text>Сейчас я учусь на 3 курсе факультета прикладной математики и информатики.
                Моя учёба сочетает математику и программирование в разных направлениях:
                численные методы, математическая статистика, криптография и теория информации.
              </Text>
              <Text>
                Лабораторные работы мы пишем в основном на C++ и Python. Постепенно разбираюсь в
                объектно-ориентированном программировании и низкоуровневой работе
                компьютера. В прошлом семестре я участвовала в команде по созданию виртуальной лабораторной работе по физике в Unity,
                и именно там соединились мои интересы: программирование, математика
                и моделирование в Blender. А эта страница - мой первый проект на React и Fusion.js.
              </Text>
            </div>
          </WideCell>
        </Grid>
      </Card>
    </Page >
  );
};
export default Home;