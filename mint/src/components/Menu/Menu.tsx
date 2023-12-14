import { Fragment, useState } from "react";
import { Menu as HMenu } from "@headlessui/react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import MenuIcon from "../../../public/icons/MenuIcon";
import AuthForm from "../Auth/AuthForm";
import WhistlistIcon from "../../../public/icons/WhistlistIcon";
import UserIcon from "../../../public/icons/UserIcon";
import SearchIcon from "../../../public/icons/SearchIcon";
import DownArrow from "../../../public/icons/DownArrow";
import InstagramLogo from "../../../public/icons/InstagramLogo";
import FacebookLogo from "../../../public/icons/FacebookLogo";
import { useWishlist } from "../../context/wishlist/WishlistProvider";
import { useAuth } from "../../context/AuthContext";

export default function Menu() {
  const router = useRouter();
  const { asPath, locale } = router;
  // @ts-ignore
  const { wishlist } = useWishlist();
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Calculate Number of Wishlist
  let noOfWishlist = wishlist.length;

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    router.push(`/search?q=${searchValue}`);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className="relative">
        <button
          type="button"
          aria-label="Hamburger Menu"
          onClick={openModal}
          className="focus:outline-none"
        >
          <MenuIcon />
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen">
            <Transition.Child as={Fragment}>
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-linear duration-600"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-linear duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div
                style={{ height: "100vh" }}
                className="relative opacity-95 overflow-y-auto inline-block dur h-screen w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
              >
                <div className="flex justify-between items-center p-6 pb-0">
                
                  <button
                    type="button"
                    className="outline-none focus:outline-none text-3xl sm:text-2xl"
                    onClick={closeModal}
                  >
                    &#10005;
                  </button>
                </div>

                <div className="mb-10">
                  <div className="itemContainer px-6 w-full flex flex-col justify-around items-center">
                    <form
                      className="flex w-full justify-between items-center mt-5 mb-5 border-gray-300 border-b-2"
                      onSubmit={handleSubmit}
                    >
                      <SearchIcon extraClass="text-gray-300 w-6 h-6" />
                      <input
                        type="search"
                        placeholder="search anything"
                        className="px-4 py-2 w-full focus:outline-none text-xl"
                        onChange={handleChange}
                      />
                    </form>
                    <Link href="#"
                      
                        className="w-full text-xl hover:bg-gray-100 text-left py-2"
                        onClick={closeModal}
                      >
                        Men
                      
                    </Link>
                    <Link href="#"
                      
                        className="w-full text-xl hover:bg-gray-100 text-left py-2"
                        onClick={closeModal}
                      >
                        Women
                    
                    </Link>
                    <Link href="#"
                      
                        className="w-full text-xl hover:bg-gray-100 text-left py-2"
                        onClick={closeModal}
                      >
                        Bags
                      
                    </Link>
                    <Link href="#"
                      
                        className="w-full text-xl hover:bg-gray-100 text-left py-2"
                        onClick={closeModal}
                      >
                        Blogs
                      
                    </Link>
                    <Link href="#"
                      
                        className="w-full text-xl hover:bg-gray-100 text-left py-2"
                        onClick={closeModal}
                      >
                        About us
                      
                    </Link>
                    <Link href="#"
                      
                        className="w-full text-xl hover:bg-gray-100 text-left py-2"
                        onClick={closeModal}
                      >
                        Contact us
                      
                    </Link>
                    <hr className="border border-gray-300 w-full mt-2" />
                    <div className="w-full text-xl py-2 my-3 flex justify-between">
                      <AuthForm extraClass="flex justify-between w-full">
                        <span>{auth.user ? "profile" : "login"}</span>
                        <UserIcon />
                      </AuthForm>
                    </div>
                    <hr className="border border-gray-300 w-full" />
                    <Link href="#"
                       className="text-xl py-2 my-3 w-full flex justify-between">
                        <span>wishlist</span>
                        <div className="relative">
                          <WhistlistIcon />
                          {noOfWishlist > 0 && (
                            <span
                              className={`absolute text-xs -top-0 -left-7 bg-gray-500 text-gray-100 py-1 px-2 rounded-full`}
                            >
                              {noOfWishlist}
                            </span>
                          )}
                        </div>
                      
                    </Link>
                    <hr className="border border-gray-300 w-full" />

                    {/* Locale Dropdown */}
                    <HMenu
                      as="div"
                      className="relative bg-gray-100 mt-4 mb-2 w-full"
                    >
                      <HMenu.Button
                        as="a"
                        href="#"
                        className="flex justify-center items-center py-2 px-4 text-center"
                      >
                        {locale === "en"}{" "}
                        <DownArrow />
                      </HMenu.Button>
                      <HMenu.Items
                        className="flex flex-col w-full right-0 absolute p-1 border border-gray-200 bg-white mt-2 outline-none"
                        style={{ zIndex: 9999 }}
                      >
                        <HMenu.Item>
                          <Link href={asPath} locale="en"
                            
                              className={`${
                                locale === "en"
                                  ? "bg-gray200 text-gray-500"
                                  : "bg-white text-gray-500"
                              } py-2 px-4 text-center focus:outline-none`}
                            >
                              english
                            
                          </Link>
                        </HMenu.Item>
                        
                      </HMenu.Items>
                    </HMenu>

                    {/* Currency Dropdown */}
                    <HMenu as="div" className="relative bg-gray-100 my-2 w-full">
                      <HMenu.Button
                        as="a"
                        href="#"
                        className="flex justify-center items-center py-2 px-4 text-center"
                      >
                        usd <DownArrow />
                      </HMenu.Button>
                      <HMenu.Items
                        className="flex flex-col w-full right-0 absolute p-1 border border-gray-200 bg-white mt-2 outline-none"
                        style={{ zIndex: 9999 }}
                      >
                        <HMenu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={`${
                                active
                                  ? "bg-gray100 text-gray-500"
                                  : "bg-white text-gray-500"
                              } py-2 px-4 text-center focus:outline-none`}
                            >
                              usd
                            </Link>
                          )}
                        </HMenu.Item>
                        {/* <HMenu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active
                                  ? "bg-gray100 text-gray500"
                                  : "bg-white text-gray500"
                              } py-2 px-4 text-center focus:outline-none`}
                            >
                              {t("mmk")}
                            </a>
                          )}
                        </HMenu.Item> */}
                      </HMenu.Items>
                    </HMenu>

                    <div className="flex my-10 w-2/5 space-x-6 justify-center">
                      <Link
                        href="#"
                        className="text-gray-400 w-10 h-10 py-1 px-auto flex justify-center rounded-md active:bg-gray-300"
                        aria-label="MINT Facebook Page"
                      >
                        <FacebookLogo extraClass="h-8" />
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-400 w-10 h-10 py-1 px-auto flex justify-center rounded-md active:bg-gray-300"
                        aria-label="MINT Facebook Page"
                      >
                        <InstagramLogo extraClass="h-8" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}