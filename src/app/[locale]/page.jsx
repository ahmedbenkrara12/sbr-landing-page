import Image from "next/image";
import { useTranslations } from "next-intl";
import ChangeLang from "./../../components/ChangeLang"

export default function Home() {
  const t = useTranslations('Index')
  return (
    <>
      <h1>App</h1>
      <ChangeLang />  
      <h1>{ t('title') }</h1>
    </>
  );
}
