'use client';

import { Tabs } from 'flowbite-react';
import { HiBookOpen } from 'react-icons/hi';

export default function Products() {
  return (
    <div className='container mx-auto p-8'>
      <Tabs.Group
      aria-label="Tabs with icons"
      style="pills"
      className=' mx-auto '
    >
       <Tabs.Item
        active
        title="All"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Profile tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        active
        title="CR"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Profile tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        title="A5"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        title="B5"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        title="Drawing"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        disabled
        title="Disabled"
      >
        <p>
          Disabled content
        </p>
      </Tabs.Item>
    </Tabs.Group>
    </div>
  )
}


