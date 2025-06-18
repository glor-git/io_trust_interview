import interview1 from '@/assets/images/interview1.webp'
import interview2 from '@/assets/images/interview2.webp'
import interview3 from '@/assets/images/interview3.webp'
import interview4 from '@/assets/images/interview4.jpg'
import interview5 from '@/assets/images/interview5.webp'
import interview6 from '@/assets/images/interview6.webp'

export type InterviewDataType = {
  title: string
  content: string
  image: string
  link: string
}

export const INTERVIEW_DATA = [
  {
    title: '【프론트엔드개발】 승준, 태현, 원태 님🔅',
    content:
      '"누구나 편리하게 사용할 수 있는 지갑 서비스를 만드는 것이 목표예요."',
    image: interview1,
    link: 'https://iotrust.notion.site/3-d009ed63d92848f1befc5399a11298a8',
  },
  {
    title: '【개발 리드】 경은 님📱',
    content: '"팀의 협업과 성장을 이끄는 개발문화를 만들어나가고 있어요."',
    image: interview2,
    link: 'https://iotrust.notion.site/5ff0eba85362420a98c62e41561e506e',
  },
  {
    title: '【UX/UI디자인】 문성, 지연, 혜선, 승현 님🎨',
    content:
      '"사용자의, 사용자에 의한, 사용자를 위한 더 나은 서비스를 디자인하고 있어요."',
    image: interview3,
    link: 'https://iotrust.notion.site/UX-UI-122051dc660f80259799c11b9ad6155c?pvs=4',
  },
  {
    title: '【데이터엔지니어링】 진석 님📊',
    content:
      '"조직이 데이터를 정확하고 쉽게 활용할 수 있는 환경을 만들고 있어요."',
    image: interview4,
    link: 'https://iotrust.notion.site/UX-UI-122051dc660f80259799c11b9ad6155c?pvs=4',
  },
  {
    title: '【콘텐츠마케팅】 세린 님💎',
    content:
      '"수평적인 환경에서 투명하게 소통하며, 같은 목표를 향해 함께 달려가는 분위기를 느낄 수 있어요!"',
    image: interview5,
    link: 'https://iotrust.notion.site/084186609b6447859229b9f86211aa1a?pvs=4',
  },
  {
    title: '【브랜드마케팅】 윤주 님🌟',
    content:
      '"디센트의 브랜드 아이덴티티를 강화하고, 사용자가 관심을 기울일 만한 브랜드로 거듭할 수 있도록 최선을 다하고 있어요."',
    image: interview6,
    link: 'https://iotrust.notion.site/084186609b6447859229b9f86211aa1a?pvs=4',
  },
]
