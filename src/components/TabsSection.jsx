import * as Tabs from '@radix-ui/react-tabs';
import PreproductionForm from './PreproductionForm';
import PostproductionTimeline from './PostproductionTimeline';
import ContractSection from './ContractSection';
import { motion } from 'framer-motion';
export default function TabsSection() {
  const animationSettings = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };
  return (
    <Tabs.Root defaultValue="pre" className="w-full">
      <Tabs.List className="flex gap-2 mb-4">
        <Tabs.Trigger value="pre" className="px-4 py-2 rounded bg-gray-200 data-[state=active]:bg-blue-500 data-[state=active]:text-white">Препродакшн</Tabs.Trigger>
        <Tabs.Trigger value="post" className="px-4 py-2 rounded bg-gray-200 data-[state=active]:bg-blue-500 data-[state=active]:text-white">Постпродакшн</Tabs.Trigger>
        <Tabs.Trigger value="contract" className="px-4 py-2 rounded bg-gray-200 data-[state=active]:bg-blue-500 data-[state=active]:text-white">Договор</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="pre">
  <motion.div {...animationSettings}>
    <PreproductionForm />
  </motion.div>
</Tabs.Content>

<Tabs.Content value="post">
  <motion.div {...animationSettings}>
    <PostproductionTimeline />
  </motion.div>
</Tabs.Content>

<Tabs.Content value="contract">
  <motion.div {...animationSettings}>
    <ContractSection />
  </motion.div>
</Tabs.Content>
    </Tabs.Root>
  );
}