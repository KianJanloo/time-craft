import React from 'react';
import { BiChevronDown, BiChevronLeft, BiChevronRight, BiChevronUp, BiHeart, BiHome, BiMapPin, BiPhone, BiUser } from 'react-icons/bi';
import { BsClock, BsMailbox } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { FaMagnifyingGlass, FaStar } from 'react-icons/fa6';
import { FiWatch } from 'react-icons/fi';
import { HiBars3 } from 'react-icons/hi2';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaDiamond } from 'react-icons/fa6';
import { GiLaserPrecision } from 'react-icons/gi';
import { SiCraftsman } from 'react-icons/si';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaFilter, FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';

// Icon service for centralized icon management
export interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

// Navigation Icons
export const SearchIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaMagnifyingGlass size={size} className={className} color={color} />
);

export const CartIcon = ({ size = 20, className = "", color }: IconProps) => (
  <CgShoppingCart size={size} className={className} color={color} />
);

export const MenuIcon = ({ size = 24, className = "", color }: IconProps) => (
  <HiBars3 size={size} className={className} color={color} />
);

export const HeartIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiHeart size={size} className={className} color={color} />
);

// Rating Icons
export const StarIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaStar size={size} className={className} color={color} />
);

// Watch Category Icons
export const WristWatchIcon = ({ size = 24, className = "", color }: IconProps) => (
  <FiWatch size={size} className={className} color={color} />
);

export const WallClockIcon = ({ size = 24, className = "", color }: IconProps) => (
  <BsClock size={size} className={className} color={color} />
);

export const PocketWatchIcon = ({ size = 24, className = "", color }: IconProps) => (
  <BsClock size={size} className={className} color={color} />
);

export const DeskClockIcon = ({ size = 24, className = "", color }: IconProps) => (
  <BsClock size={size} className={className} color={color} />
);

export const AntiqueClockIcon = ({ size = 24, className = "", color }: IconProps) => (
  <BsClock size={size} className={className} color={color} />
);

export const SmartWatchIcon = ({ size = 24, className = "", color }: IconProps) => (
  <FiWatch size={size} className={className} color={color} />
);

// Contact Icons
export const PhoneIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiPhone size={size} className={className} color={color} />
);

export const EmailIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BsMailbox size={size} className={className} color={color} />
);

export const LocationIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiMapPin size={size} className={className} color={color} />
);

export const UserIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiUser size={size} className={className} color={color} />
);

// Arrow Icons
export const RightArrowIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiChevronRight size={size} className={className} color={color} />
);

export const LeftArrowIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiChevronLeft size={size} className={className} color={color} />
);

export const DownArrowIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiChevronDown size={size} className={className} color={color} />
);

export const UpArrowIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiChevronUp size={size} className={className} color={color} />
);

// Social Media Icons
export const FacebookIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaFacebook size={size} className={className} color={color} />
);

export const TwitterIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaTwitter size={size} className={className} color={color} />
);

export const InstagramIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaInstagram size={size} className={className} color={color} />
);

export const YoutubeIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaYoutube size={size} className={className} color={color} />
);

export const LinkedinIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaLinkedin size={size} className={className} color={color} />
);

// Feature Icons
export const DiamondIcon = ({ size = 24, className = "", color }: IconProps) => (
  <FaDiamond size={size} className={className} color={color} />
);

export const PrecisionIcon = ({ size = 24, className = "", color }: IconProps) => (
  <GiLaserPrecision size={size} className={className} color={color} />
);

export const CraftsmanshipIcon = ({ size = 24, className = "", color }: IconProps) => (
  <SiCraftsman size={size} className={className} color={color} />
);

export const TimelessnessIcon = ({ size = 24, className = "", color }: IconProps) => (
  <FaTimes size={size} className={className} color={color} />
);

// Logo Icon
export const LogoIcon = ({ size = 32, className = "", color }: IconProps) => (
  <BsClock size={size} className={className} color={color} />
);

// Home Icon
export const HomeIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiHome size={size} className={className} color={color} />
);

// Cart Icons
export const PlusIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaPlus size={size} className={className} color={color} />
);

export const MinusIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaMinus size={size} className={className} color={color} />
);

export const TrashIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaTrash size={size} className={className} color={color} />
);

export const CloseIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaTimes size={size} className={className} color={color} />
);

// Clock Icon
export const ClockIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BsClock size={size} className={className} color={color} />
);

// Eye Icon
export const EyeIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaEye size={size} className={className} color={color} />
);

// Arrow Left Icon
export const ArrowLeftIcon = ({ size = 20, className = "", color }: IconProps) => (
  <BiChevronLeft size={size} className={className} color={color} />
);

// Filter and Sort Icons
export const FilterIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaFilter size={size} className={className} color={color} />
);

export const SortAscendingIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaSortAmountUp size={size} className={className} color={color} />
);

export const SortDescendingIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaSortAmountDown size={size} className={className} color={color} />
);

// X Icon (Close/Remove)
export const XIcon = ({ size = 20, className = "", color }: IconProps) => (
  <FaTimes size={size} className={className} color={color} />
);
