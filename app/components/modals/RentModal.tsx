'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";
import useRentModal from '@/app/hooks/useRentModal';
import Modal from "./Modal";
import { categories } from '../navbar/Categories';
import Counter from "../inputs/Counter";
import CategoryInput from '../inputs/CategoryInput';
import CountrySelect from "../inputs/CountrySelect";
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import Heading from '../Heading';



enum STEPS {
  TITLE = 0,
  DESCRIPTION = 1,
  COPYWRITE = 2,
  PRODUCTION = 3,
  RECORD_LABEL = 4,
  IMAGES = 5,
  CATEGORY = 6,
  GENRE = 7,
  AUDIO = 8,
  PREVIEW = 9,
  PLAYLIST = 10,
  NFT = 11,
  LOCATION = 12,
  SUBMIT = 13
}

const RentModal = () => {
  const router = useRouter();
  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.TITLE);

  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      copywrite_holder: '',
      copywrite_year: 2023,
      production_holder: '',
      production_year: 2023,
      record_label: '',
      imageSrc: '',
      category: '',
      genre: null,
      secondarygenre: '',
      language: '',
      audio: '',
      preview: '',
      lyrics: '',
      copywrite_documentation: '',
      releasing_date: '',
      playlist: '',
      ndt_wallet_id: '',
      total_nfts: '',
      nft_price: '',
      location: null,
      submit:''

    }
  });

  const location = watch('location');
  const category = watch('category');
  const copywrite_year = watch('copywrite_year');
  const production_year = watch('production_year');
  const imageSrc = watch('imageSrc');

  const Map = useMemo(() => dynamic(() => import('../Map'), { 
    ssr: false 
  }), [location]);


  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.SUBMIT) {
      return onNext();
    }
    
    setIsLoading(true);

    axios.post('/api/listings', data)
    .then(() => {
      toast.success('Listing created!');
      router.refresh();
      reset();
      setStep(STEPS.CATEGORY)
      rentModal.onClose();
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.SUBMIT) {
      return 'Create'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.TITLE) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="What would the title of the song?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your Song?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.COPYWRITE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell Us about the copywrite area?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="copywrite_holder"
          label="CopyWrite Holder"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Counter 
          onChange={(value) => setCustomValue('copywrite_year', value)}
          value={copywrite_year}
          title="CopyWrite Year" 
          subtitle=""
        />
        <hr/>
        <Input
          id="copywrite_documentation"
          label="CoyWrite Documentation"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PRODUCTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell Us about the copywrite area?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="production_holder"
          label="Production Holder"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Counter 
          onChange={(value) => setCustomValue('production_year', value)}
          value={production_year}
          title="Production Year" 
          subtitle=""
        />
      </div>
    )
  }

  if (step === STEPS.RECORD_LABEL) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell Us about your Label?"
          subtitle="eg: Independent or any label signed"
        />
        <Input
          id="record_label"
          label="LABEL"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add the preview photo of your song"
          subtitle="Show your audience what your music looks like!"
        />
        <ImageUpload
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        />
      </div>
    )
  }

  if (step === STEPS.CATEGORY){
    bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your Song?"
        subtitle="Pick a category"
      />
      <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => 
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )
  }

  if (step === STEPS.GENRE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe the genres of your Song?"
          subtitle="Upload something exotic!"
        />
        <Input
          id="genre"
          label="Genre"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="secondarygenre"
          label="Secondary Genre"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="language"
          label="Language"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.AUDIO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Enter Your Song"
          subtitle=""
        />
        <Input
          id="audio"
          label="Upload Audio"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="lyrics"
          label="Upload Lyrics"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="releasing_date"
          label="Release Date"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PREVIEW) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add the preview  of your song"
          subtitle="Show your audience what your music looks like!"
        />
        <Input
          id="preview"
          label="Preview of your Song"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PLAYLIST) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your Playlist?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="playlist"
          label="Playlist Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.NFT) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your NFTs of your music"
          subtitle="What will you have?"
        />
        <Input
        id="nft_wallet_id"
        label="Your NFT Wallet Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <hr />
        <Input
        id="total_nfts"
        label="Total NFts you want to launch"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <hr />
        <Input
        id="nft_price"
        label="NFT Price (in eth)"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      </div>
    )
  }

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect 
          value={location} 
          onChange={(value) => setCustomValue('location', value)} 
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.SUBMIT) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Do You Want to Submit the song"
          subtitle="Only Submit genuine copy and you agree to the terms and conditions of our service"
        />
      </div>
    )
  }
  

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="Airbnb your home!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.TITLE ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
}

export default RentModal;





