import { useEffect, useState } from "react";
import { SocialData } from '../../types/SocialData';

const Socials = () => {
  const [backendData, setBackendData] = useState<SocialData | null>(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data: SocialData) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <ul className="flex gap-x-6">
        {backendData?.socials ? (
          backendData.socials.map((social, index) => (
            <li key={index} className="text-2xl text-white">
              <a href={social.href}>
                <img src={social.src} alt={social.name} />
              </a>
            </li>
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </>
  );
};

export default Socials;
