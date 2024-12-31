import { IconType } from 'react-icons'
import {FaReact} from 'react-icons/fa'
import { DiCss3Full, DiJavascript1 } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import {SiStyledcomponents, SiFigma} from 'react-icons/si'
import {
    TbBrandHtml5,
    TbBrandTypescript,
} from 'react-icons/tb'

export type SkillType = {
    title: string
    icon: IconType
    color: string
}
export const skills: SkillType[] = [
    {
        title: 'JavaScript',
        icon: DiJavascript1,
        color:'#ffcc33'
    },
    {
        title: 'React',
        icon: FaReact,
        color: '#149eca',
    },
    {
        title: 'TypeScript',
        icon: TbBrandTypescript,
        color: '#36c',
    },
    {
        title: 'Html',
        icon: TbBrandHtml5,
        color: '#c63',
    },
    {
        title: 'Css',
        icon: DiCss3Full,
        color: '#017dc8',
    },
    {
        title: 'Git',
        icon: BsGit,
        color: '#f44c28',
    },
    {
        title: 'Figma',
        icon: SiFigma,
        color: '#a259ff',
    },
    {
        title: 'Styled Components',
        icon: SiStyledcomponents,
        color: '#ffd35b',
    },
]

