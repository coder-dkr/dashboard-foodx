"use client";

import { GithubUser } from "@/types";
import { getAdmin } from "@/constants";
import { useState, useEffect } from "react";
import Image from "next/image";

const AdminProfileModal: React.FC = () => {
  const [admin, setAdmin] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const ModalStateUpdate = () => {
      const isModal = JSON.parse(localStorage.getItem("isModal") || "false");
      setIsModalOpen(isModal);
    };

    ModalStateUpdate();

    window.addEventListener("storage", ModalStateUpdate);
    return () => window.removeEventListener("storage", ModalStateUpdate);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    async function fetchAdminData() {
      try {
        const data = await getAdmin();
        setAdmin(data || {});
      } catch {
      } finally {
        setIsLoading(false);
      }
    }
    fetchAdminData();
  }, [isModalOpen]);

  const handleCloseModal = () => {
    localStorage.setItem("isModal", JSON.stringify(false));
    setIsModalOpen(false);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    isModalOpen && (
      <>
        <div
          className="absolute inset-0 z-[99] bg-black/70"
          onClick={handleCloseModal}
        />
        <section className="absolute z-[999] bg-white rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 p-8">
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              Loading...
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <button
                onClick={handleCloseModal}
                className="absolute right-8 top-4 text-3xl hover:bg-gray-100 p-1 px-3 rounded-full flex justify-center items-center"
              >
                &times;
              </button>
                <div className="relative w-full h-3/4 my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
                  <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
                    Admin
                  </span>

                  <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                    <Image
                    //   className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
                      src={admin?.avatar_url ?? '/image.png'}
                      width={300}
                      height={300}
                      alt={admin?.name ?? 'admin image'}
                    />
                  </div>

                  <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                    <p
                      className="font-display mb-2 text-2xl font-semibold dark:text-gray-800"
                      itemProp="author"
                    >
                     {admin?.name}
                    </p>

                    <div className="mb-4 md:text-lg text-gray-400">
                      <p>
                        {admin?.name?.slice(0,5)} is a Developer with a strong hold in web development. Currently learning App Development
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <a
                        title="youtube url"
                        href={`https://x.com/${admin?.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       <Image alt="twitter" width={24} height={24} src='/twitter.svg' /> 
                      </a>

                      <a
                        title="website url"
                        href={admin?.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       <Image alt="github" width={24} height={24} src='/github.svg' /> 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
           
          )}
        </section>
      </>
    )
  );
};

export default AdminProfileModal;
